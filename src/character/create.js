import React from 'react';
import styled from 'styled-components'
import { useParams, useHistory } from 'react-router-dom'
import { getGameData, createCharacter } from './data-store'
import { CharacterContainer, LoadingContainer } from './styles'
import { Card, TABLET_SIZE } from '../global-styles'
import * as GameIcons from 'react-icons/gi'

const SheetList = styled.div`
	display: flex;
	flex-direction: row;
	margin-top: 2em;
	margin-bottom: 3em;
	align-items: flex-start;
	flex-wrap: wrap;
	justify-content: space-between;
	gap: 2em 1em;

	> * {
		flex-basis: calc(33% - 1em);
	}
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
			<h2>Create a {gameName} character</h2>
			<SheetList>
				{Object.keys(sheets).map(sheetId => {
					const iconKey = `Gi${sheetIcons ? sheetIcons[sheetId] : 'IdCard'}`
					const SheetIcon = GameIcons[iconKey]
					return (
						<Card
							key={sheetId}
							onClick={() => createCharacterAndGoToSheet(sheetId)}
							icon={SheetIcon}
							label={sheets[sheetId]}
						/>
					)
				})}
			</SheetList>
		</CharacterContainer>
	) : (
		<LoadingContainer>Loading...</LoadingContainer>
	)
}

export default CreateCharacter