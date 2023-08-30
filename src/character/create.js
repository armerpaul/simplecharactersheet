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
	margin-bottom: 4em;
	align-items: flex-start;
	flex-wrap: wrap;
	justify-content: space-between;
	gap: 1em .5em;

	> * {
		min-width: 10em;
		flex-basis: calc(33% - .5em);
	}

	@media (min-width: ${TABLET_SIZE}) {
		gap: 2em 1em;

		> * {
			flex-basis: calc(25% - 1em);
		}
	}
`

const CreateCharacter = () => {
	const [gameName, setGameName] = React.useState()
	const [gameLink, setGameLink] = React.useState()
	const [sheets, setSheets] = React.useState()
	const [sheetIcons, setSheetIcons] = React.useState()

	const history = useHistory()
	const { gameId } = useParams()
	React.useEffect(() => {
		getGameData({ gameId }).then(gameData => {
			setGameName(gameData.name)
			setGameLink(gameData.link)
			setSheets(gameData.sheets)
			setSheetIcons(gameData.sheetIcons)
		})
	}, [gameId])

	const createCharacterAndGoToSheet = sheetId => {
		const character = createCharacter({ gameId, sheetId })
		history.push(`/${gameId}/${character.id}`)
	}

	if (gameName && !sheets) {
		createCharacterAndGoToSheet()
	}

	return sheets ? (
		<CharacterContainer>
			<p>Select a {gameName} playbook:</p>
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
			<p>
				Support the game creators: <a
					target="_blank"
					rel="noreferrer"
					href={gameLink}>
						{gameName} product page
				</a>
			</p>
		</CharacterContainer>
	) : (
		<LoadingContainer>Loading...</LoadingContainer>
	)
}

export default CreateCharacter