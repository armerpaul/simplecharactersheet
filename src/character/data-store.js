import * as R from 'ramda'
import axios from 'axios'

const lsKey = characterId => `scs-${characterId}`
const generateCharacterId = () => `${(new Date()).getTime()}`

export const createCharacter = ({ sheet, name = '' }) => {
	const id = generateCharacterId()
	const character = { id, sheet, name }
	localStorage.setItem(lsKey(id), JSON.stringify(character))
	return character
}

export const getGameData = ({ gameId }) => axios
	.get(`/game-data/${gameId}/index.json`)
	.then(response => {
		return response.data
	})
	.catch(() => `Error loading game data for: ${gameId}`)

export const getSheetData = ({ gameId, sheetId }) => axios
	.get(`/game-data/${gameId}/${sheetId}.json`)
	.then(response => {
		return response.data
	})
	.catch(() => `Error loading sheet data for: ${gameId}/${sheetId}`)

export const getCharacterAndGameData = async ({ gameId, characterId }) => {
	try {
		const raw = localStorage.getItem(lsKey(characterId))
		const character = raw ? JSON.parse(raw) : {}

		const game = await getGameData({ gameId })
		const sheet = await getSheetData({ gameId, sheetId: character.sheet })

		return {
			character,
			game,
			sheet,
		}
	} catch (error) {
		console.error(error)
		return { error }
	}
}

export const updateAndSaveCharacter = ({ path, value, character }) => {
	try {
		const pathLens = R.lensPath(path)
		const updatedCharacter = R.set(pathLens, value, character)
		localStorage.setItem(lsKey(character.id), JSON.stringify(updatedCharacter))
		return updatedCharacter
	} catch (e) {
		console.error(e)
		return character
	}

}
