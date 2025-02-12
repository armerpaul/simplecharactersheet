import styled from 'styled-components'
import { IconType } from 'react-icons'
import {
	GiRaiseZombie as MotwIcon,
	GiSpaceship as LafIcon,
	GiAnvilImpact as UnderConstructionIcon,
} from 'react-icons/gi'

import { Card, TABLET_SIZE } from '../../global-styles'
import css from './style.css'

const Home = () => {
	return (
		<StyledAppHome>
				<p>Simple Character Sheets is an app for creating character sheets for indie games. Select a game below to get started:</p>

			<GameList>
				<CreateCharacter gameId="motw" gameName="Monster of the Week" icon={MotwIcon} />
				<CreateCharacter gameId="laf" gameName="Lazers & Feelings" icon={LafIcon} />
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

const CreateCharacter = ({ 
	gameId, 
	gameName, 
	icon, 
	inProgress 
}: {
	gameId: string,
	gameName: string,
	icon: IconType,
	inProgress?: boolean
}) => (
	<a href={`/${gameId}/new`}>
		<Card
			key={gameId}
			label={gameName}
			icon={inProgress ? UnderConstructionIcon : icon}
		/>
	</a>
)

const StyledAppHome = styled.div`
	display: flex;
	flex-direction: column;
`
const GameList = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: stretch;
	gap: 1em;
	margin-bottom: 2em;

	> * {
		flex-basis: calc(50% - 1em);

		@media (min-width: ${TABLET_SIZE}) {
			flex-basis: calc(33% - 1em);
		}
	}
`

export {
	Home
}
