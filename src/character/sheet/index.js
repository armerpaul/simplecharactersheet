import React from 'react'
import styled from 'styled-components'
import SheetBlock from './block'
import Stats from './stats'
import {
	getCharacterAndGameData,
	updateAndSaveCharacter,
} from '../data-store'
import { CharacterContainer, LoadingContainer } from '../styles'
import { useParams } from 'react-router-dom'
import { Button, getGlobalTheme, IconButton } from '../../global-styles'
import {
	GiTinker as EditIcon,
	GiThumbUp as SaveIcon,
} from 'react-icons/gi'

const ErrorContainer = styled(CharacterContainer)`
	color: red;
`
const CharacterHeader = styled.div`
	display: flex;
	flex-direction: row;
	align-items: end;
	justify-content: space-between;
	margin-top: 6vh;
	position: sticky;
	padding: 1.25em 0 0.75em;
	border-bottom: 0.15rem solid;
	background: ${getGlobalTheme().backgroundColor};
	top: 0;
`
const CharacterName = styled.h1`
	margin-top: 0;
	margin-bottom: 0;
`
const NameInput = styled.input.attrs({ type: 'text' })`
	font-size: inherit;
	font-family: inherit;
`
const CharacterOptions = styled.div`
	font-size: 1.25rem;
`
const SheetName = styled.h5`
	font-size: 1.25rem;
	margin-top: 0.5em;
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
		<CharacterContainer>
			<CharacterHeader>
				<CharacterName>
					{isEditing ? (
						<NameInput
							value={character.name}
							onChange={event => updateCharacter({ path: ['name'], value: event.target.value })}
						/>
					) : character.name}
				</CharacterName>
				<CharacterOptions>
					{isEditing ? (
						<Button
							icon={SaveIcon}
							label="Save"
							onClick={() => setIsEditing(false)}
						/>
					) : (
						<IconButton
							icon={EditIcon}
							label="Edit Character"
							onClick={() => setIsEditing(true)}
						/>
					)}
				</CharacterOptions>
			</CharacterHeader>
			<SheetName>{sheet.name}</SheetName>

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
		</CharacterContainer>
	)
}

export default CharacterSheet