import React from 'react'
import styled from 'styled-components'
import SheetBlock from './sheet-block'
import Stats from './stats'
import {
	getCharacterAndGameData,
	updateAndSaveCharacter,
} from '../data-store'
import { useParams } from 'react-router-dom'

const SheetContainer = styled.div`
	max-width: 50rem;
	margin-left: auto;
	margin-right: auto;
`
const LoadingContainer = styled(SheetContainer)`
	@keyframes pulse {
		from { opacity: 0.5 }
		to { opacity: 1 }
	}

  animation-duration: 0.5s;
  animation-name: pulse;
	animation-iteration-count: infinite;
	animation-direction: alternate;

	text-align: center;
	padding: 20vh;
	font-size: 2rem;
`
const ErrorContainer = styled(SheetContainer)`
	color: red;
`

const CharacterSheet = () => {
	let { gameId, characterId } = useParams()

	const [isEditing, setIsEditing] = React.useState(true)
	const [error, setError] = React.useState()
	const [character, setCharacter] = React.useState()
	const [game, setGame] = React.useState()
	const [sheet, setSheet] = React.useState()

	React.useEffect(
		() => {
			getCharacterAndGameData({ characterId, gameId }).then(
				({ error, ...data }) => {
					if (error) {
						setError(error)
						return
					}
					setCharacter(data.character)
					setGame(data.game)
					setSheet(data.sheet)
					setError(undefined)
				})
		},
		[characterId, gameId]
	)

	const updateCharacter = ({ path, value }) => {
		const updatedCharacter = updateAndSaveCharacter({ path, value, character })
		setCharacter(updatedCharacter)
	}

	if (error) {
		return (
			<ErrorContainer>{error}</ErrorContainer>
		)
	}

	if (!game || !sheet) {
		return (
			<LoadingContainer>Loading...</LoadingContainer>
		)
	}

	if (!character) {
		return (
			<ErrorContainer>Error loading character</ErrorContainer>
		)
	}

	return (
		<SheetContainer>
			<h1>{sheet.name}</h1>
			<label
				htmlFor="isEditing"
			>
				<span>Editing:</span>
				<input
					id="isEditing"
					type="checkbox"
					onChange={() => setIsEditing(!isEditing)}
					checked={isEditing}
				/>
			</label>
			<p>{sheet.description}</p>

			<Stats {...game.stats} isEditing={isEditing} />

			{sheet.blocks.map((block, index) => (
				<SheetBlock
					{...block}
					key={`block-${index}`}
					value={character[block.name]}
					isEditing={isEditing}
					updateCharacter={updateCharacter}
				/>
			))}
		</SheetContainer>
	)
}

export default CharacterSheet