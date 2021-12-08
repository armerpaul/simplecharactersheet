import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Card, TABLET_SIZE } from '../global-styles'
import {
	GiRaiseZombie as MotwIcon,
	GiCrownedHeart as TslIcon,
	GiAnvilImpact as UnderConstructionIcon,
} from 'react-icons/gi'

const StyledAppHome = styled.div`
	display: flex;
	flex-direction: column;

	@media (min-width: ${TABLET_SIZE}) {
		// flex-direction: row;
	}
`
const GameList = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: stretch;
	gap: 1em;
	margin-bottom: 2em;

	> * {
		flex-basis: calc(33% - 1em);

	}
`

const CreateCharacter = ({ gameId, gameName, icon, inProgress }) => (
	<Link to={`/${gameId}/new`}>
		<Card
			key={gameId}
			label={gameName}
			icon={inProgress ? UnderConstructionIcon : icon}
		/>
	</Link>
)

const AppHome = () => {
	return (
		<StyledAppHome>
				<p>Simple Character Sheets is an app for creating character sheets for indie games. Select a game below to get started:</p>

			<GameList>
				<CreateCharacter gameId="motw" gameName="Monster of the Week" icon={MotwIcon} />
				<CreateCharacter gameId="tsl" gameName="Thirsty Sword Lesbians" icon={TslIcon} />
				<Card
					isDisabled={true}
					key="UnderConstruction"
					label="More coming soon"
					icon={UnderConstructionIcon}
				/>
			</GameList>
			<p>Don't have a printer around? Everyone only has their phones? Need to add custom moves or add notes? Use Simple Character Sheet to streamline and simplify your table-top gaming.</p>

		</StyledAppHome>
	)
}

export default AppHome