import motw from './motw/base.json'
import motwChosen from './motw/chosen.json'

const gamesData = {
	motw: {
		game: motw,
		sheets: {
			chosen: motwChosen,
		}
	}
}

// Actually lazy load
const getCharacterData = ({ gameId, characterId }) => {
	try {
		const raw = localStorage.getItem(`scs-${characterId}`)
		const character = JSON.parse(raw || `{ "sheetId": "chosen" }`)
		const { game } = gamesData[gameId]
		const sheet = character.sheetId && gamesData[gameId].sheets[character.sheetId]

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

export default getCharacterData