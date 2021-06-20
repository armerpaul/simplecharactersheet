import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Button, TABLET_SIZE } from '../global-styles'
import {
	GiShamblingMound as MotwIcon,
	GiAnvilImpact as UnderConstructionIcon,
} from 'react-icons/gi'

const StyledAppHome = styled.div`
	display: flex;
	flex-direction: column-reverse;

	@media (min-width: ${TABLET_SIZE}) {
		flex-direction: row;
	}
`

const About = styled.div`

`
const GameList = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: stretch;
	font-size: 1.5em;
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
			<GameList>
				<CreateCharacter gameId="motw" gameName="Monster of the Week" icon={MotwIcon} />
				<CreateCharacter gameId="sprl" gameName="The Sprawl" inProgress={true} />
				<CreateCharacter gameId="sprl" gameName="Masks" inProgress={true} />
			</GameList>
			<About>
				We
			</About>
		</StyledAppHome>
	)
}

export default AppHome