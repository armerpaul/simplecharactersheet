import axios from 'axios'

const lsKey = characterId => `scs-${characterId}`
const generateCharacterId = () => `${(new Date()).getTime()}`

export const createCharacter = ({ gameId, sheetId, name }) => {
	const id = generateCharacterId()
	const character = {
		id,
		gameId,
		sheetId,
	}
	localStorage.setItem(lsKey(id), JSON.stringify(character))
	return character
}

export const getGameData = ({ gameId }) => axios
	.get(`/game-data/${gameId}/index.json`)
	.then(response => {
		return response.data
	})
	.catch(() => {
		throw new Error(`Error loading game data for: ${gameId}`)
	})

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

export const getCharacterAndGameData = async ({ gameId, characterId }) => {
	try {
		const character = getCharacterData({ characterId })
		const game = await getGameData({ gameId })
		const sheet = await getSheetData({ gameId, sheetId: character.sheetId })

		return {
			character,
			game,
			sheet,
		}
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
