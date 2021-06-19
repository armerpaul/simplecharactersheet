import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Button, TABLET_SIZE, DESKTOP_SIZE } from '../global-styles'
import {
	GiShamblingMound as MotwIcon,
	GiAnvilImpact as UnderConstructionIcon,
} from 'react-icons/gi'

const StyledAppHome = styled.div`
	display: flex;
	flex-direction: column;
	padding-top: 10vh;

	@media (min-width: ${TABLET_SIZE}) {
		flex-direction: row;
	}
`

const About = styled.div`
	flex: 1 1 40%;
	padding-right: 3em;
`
const GameList = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: stretch;
	font-size: 1.15em;
`
const GameLink = styled(Link)`
	margin-bottom: 1em;
`

const CreateCharacter = ({ gameId, gameName, icon, inProgress }) => (
	<GameLink to={`/${gameId}/new`}>
		<Button
			disabled={inProgress}
			icon={inProgress ? UnderConstructionIcon : icon}
			label={`Create a ${gameName} character`}
		/>
	</GameLink>
)

const AppHome = () => {
	return (
		<StyledAppHome>
			<About>
				Welcome to Simple Character Sheet, leveling-up Powered-by-the-Apocalypse playbooks. Don't have a printer around? Everyone only has their phones? Need to add custom moves or add notes? Use Simple Character Sheet to streamline and simplify your table-top gaming.
			</About>
			<GameList>
				<h3>Create a Character:</h3>
				<CreateCharacter gameId="motw" gameName="Monster of the Week" icon={MotwIcon} />
				<CreateCharacter gameId="sprl" gameName="The Sprawl" inProgress={true} />
				<CreateCharacter gameId="sprl" gameName="Masks" inProgress={true} />
			</GameList>
		</StyledAppHome>
	)
}

export default AppHome