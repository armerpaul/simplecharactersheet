import React from 'react';
import { useParams, useHistory } from 'react-router-dom'
import { getGameData, createCharacter } from './data-store'

const CreateCharacter = () => {
	const [gameData, setGameData] = React.useState()
	const [selectedSheet, setSelectedSheet] = React.useState()

	const history = useHistory()
	const { gameId } = useParams()
	React.useEffect(() => {
		getGameData({ gameId }).then(setGameData)
	}, [gameId])

	return gameData && gameData.sheets ? (
		<div>
			{Object.keys(gameData.sheets).map(sheetId => (
				<label key={sheetId}>
					<input
						type="radio"
						name="sheet"
						value={sheetId}
						onChange={event => setSelectedSheet(event.target.value)}
					/>
					<span>{gameData.sheets[sheetId]}</span>
				</label>
			))}
			<button onClick={() => {
				const character = createCharacter({ sheet: selectedSheet })
				history.push(`/${gameId}/${character.id}`)
			}}>Create</button>
		</div>
	) : (
		<div>Loading...</div>
	)
}

export default CreateCharacter