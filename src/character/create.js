import React from 'react';
import styled from 'styled-components'
import { useParams, useHistory } from 'react-router-dom'
import { getGameData, createCharacter } from './data-store'
import { CharacterContainer, LoadingContainer } from './styles'
import { getGlobalTheme, TABLET_SIZE } from '../global-styles'
import * as GameIcons from 'react-icons/gi'

const SheetList = styled.div`
	display: flex;
	flex-direction: row;
	margin-bottom: 1em;
	align-items: flex-start;
	flex-wrap: wrap;
	justify-content: center;
`
const SheetButton = styled.div`
	margin-bottom: 0.25em;
	flex-basis: calc(33% - 1em);
	min-width: 10em;
	margin: 0.5em;
	cursor: pointer;
	background: ${getGlobalTheme().fontColor};
	display: flex;
	flex-direction: column;
	align-items: center;

	@media (min-width: ${TABLET_SIZE}) {
		flex-basis: calc(25% - 1em);
	}

	svg {
		font-size: 3em;
		margin: 0.2em;
		color: ${getGlobalTheme().backgroundColor};
	}

	&:hover {
		background: ${getGlobalTheme().linkColor};
		color: ${getGlobalTheme().linkColor};
	}
`
const SheetButtonLabel = styled.div`
	width: 100%;
	background: ${getGlobalTheme().backgroundColor};
	font-weight: bold;
	padding-top: 0.3em;
	padding-bottom: 0.3em;
`

const CreateCharacter = () => {
	const [gameName, setGameName] = React.useState()
	const [sheets, setSheets] = React.useState()
	const [sheetIcons, setSheetIcons] = React.useState()

	const history = useHistory()
	const { gameId } = useParams()
	React.useEffect(() => {
		getGameData({ gameId }).then(gameData => {
			setGameName(gameData.name)
			setSheets(gameData.sheets)
			setSheetIcons(gameData.sheetIcons)
		})
	}, [gameId])

	const createCharacterAndGoToSheet = sheetId => {
		const character = createCharacter({ gameId, sheetId })
		history.push(`/${gameId}/${character.id}`)
	}

	return sheets ? (
		<CharacterContainer>
			<h1>Create a character</h1>
			<h3>Pick a sheet to create a {gameName} character:</h3>
			<SheetList>
				{Object.keys(sheets).map(sheetId => {
					const iconKey = `Gi${sheetIcons ? sheetIcons[sheetId] : 'IdCard'}`
					const SheetIcon = GameIcons[iconKey]
					return (
						<SheetButton key={sheetId} onClick={() => createCharacterAndGoToSheet(sheetId)}>
							<SheetIcon />
							<SheetButtonLabel>{sheets[sheetId]}</SheetButtonLabel>
						</SheetButton>
					)
				})}
			</SheetList>
		</CharacterContainer>
	) : (
		<LoadingContainer>Loading...</LoadingContainer>
	)
}

export default CreateCharacter