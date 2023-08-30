import axios from 'axios'
import * as R from 'ramda'

const lsKey = characterId => `scs-${characterId}`
const generateCharacterId = () => `${(new Date()).getTime()}`

export const createCharacter = ({ gameId, sheetId }) => {
	const id = generateCharacterId()
	const character = {
		id,
		gameId,
		sheetId,
	}
	localStorage.setItem(lsKey(id), JSON.stringify(character))
	return character
}

export const getGameData = async ({ gameId }) => {
	try {
		const gameData = await axios
			.get(`/game-data/${gameId}/index.json`)
			.then(response => response.data)
		const themeData = await axios
			.get(`/game-data/${gameId}/theme.json`)
			.then(response => response.data)
			.catch(() => {
				console.log(`No theme set for ${gameId}`)
				return {}
			})
		return {
			...themeData,
			...gameData,
		}
	} catch (e) {
		console.error(e)
		throw new Error(`Error loading game data for: ${gameId}`)
	}
}

export const getSheetData = ({ gameId, sheetId }) => axios
	.get(`/game-data/${gameId}/${sheetId}.json`)
	.then(response => response.data)
	.catch(() => {
		throw new Error(`Error loading sheet data for: ${gameId}/${sheetId}`)
	})

export const getCharacterData = ({ characterId }) => {
	const raw = localStorage.getItem(lsKey(characterId))
	if (!raw) {
		throw new Error(`No saved character for id: ${characterId}` )
	}

	return JSON.parse(raw)
}

const WILDCARD_SYMBOL = '*'
const hydrateBlock = ({ templateBlock, sheetTemplateBlocks }) => {
	if (Array.isArray(templateBlock)) {
		return templateBlock.map(
			b => hydrateBlock({ templateBlock: b, sheetTemplateBlocks })
		).filter(R.identity)
	}

	const type = R.prop('type', templateBlock)
	switch (type) {
		case 'parent':
			const children = hydrateBlock({
				templateBlock: R.prop('children', templateBlock),
				sheetTemplateBlocks
			})
			return {
				...templateBlock,
				children,
			}
		case 'blocks':
			return templateBlock
		default:
			const { name, optional } = templateBlock
			let fullyHydrated = true
			const hydratedBlock = R.mapObjIndexed(
				(value, key) => {
					if (WILDCARD_SYMBOL === value) {
						const blockValue = R.path([name, key], sheetTemplateBlocks)
						if (!blockValue) {
							if (!optional) {
								throw new Error(`No sheet value for template @ ${name}.${key}`)
							}
							fullyHydrated = false
							return undefined
						}
						return blockValue
					}
					else if ('name' === key) {
						return R.path([name, key], sheetTemplateBlocks) || value
					}

					return value
				},
				templateBlock
			)

			return fullyHydrated ? hydratedBlock : undefined
	}
}
const hydrateTemplate = ({ templateBlock, sheetBlocks, sheetTemplateBlocks }) => {
	const blocks = hydrateBlock({ templateBlock, sheetTemplateBlocks })
	const [frontBlocks, endBlocks] = R.splitWhen(block => 'blocks' === block.type, blocks)
	return [
		...frontBlocks,
		...sheetBlocks,
		...endBlocks
	]
}

export const getCharacterAndGameData = async ({ gameId, characterId }) => {
	try {
		const data = {
			character: getCharacterData({ characterId }),
			game: await getGameData({ gameId }),
		}
		const getFromGame = prop => R.path(['game', prop], data)

		if (data.character.sheetId) {
			const sheet = await getSheetData({ gameId, sheetId: data.character.sheetId })
			const blocks = hydrateTemplate({
				templateBlock: getFromGame('sheetTemplate'),
				sheetBlocks: R.prop('blocks', sheet),
				sheetTemplateBlocks: R.propOr({}, 'templateBlocks', sheet),
			})

			data.sheet = {
				...sheet,
				blocks,
			}
		} else {
			data.sheet = {
				blocks: getFromGame('sheetTemplate'),
				description: getFromGame('description'),
			}
		}
		console.log('data.sheet', data.sheet)

		return data
	} catch (error) {
		console.error(error)
		return { error: error.message }
	}
}

export const saveCharacter = character => {
	try {
		const raw = JSON.stringify(character)
		localStorage.setItem(lsKey(character.id), raw)
	} catch (e) {
		console.error(e)
		throw new Error(`Error saving character`)
	}

}
