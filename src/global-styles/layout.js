import styled from 'styled-components'
import { getGlobalTheme } from './themes'

export const TABLET_SIZE = '900px'
export const DESKTOP_SIZE = '1200px'

export const AppContainer = styled.div`
	max-width: 50rem;
	margin-left: auto;
	margin-right: auto;
	padding: 0.6rem;
	background: ${getGlobalTheme().containerColor};
	border: 1px solid ${getGlobalTheme().backgroundColor.darken(0.1)};

	@media (min-width: ${TABLET_SIZE}) {
		margin-top: 6vh;
		padding: 1rem 1.25rem;
	}
`
const CardLabel = styled.div`
	width: 100%;
	background: ${getGlobalTheme().containerColor};
	font-weight: bold;
	padding-top: 0.3em;
	padding-bottom: 0.3em;
`
const CardContainer = styled.div`
	cursor: pointer;
	color: ${getGlobalTheme().fontColor};
	background: ${getGlobalTheme().fontColor};
	display: flex;
	flex-direction: column;
	align-items: center;

	svg {
		font-size: 3em;
		margin: 0.2em;
		color: ${getGlobalTheme().containerColor};
	}

`
const ActiveCardContainer = styled(CardContainer)`
	&:hover {
		background: ${getGlobalTheme().linkColor};
		color: ${getGlobalTheme().linkColor};
	}
`
const DisabledCardContainer = styled(CardContainer)`
	color: ${getGlobalTheme().fontColor.mix(getGlobalTheme().backgroundColor)};
	background: ${getGlobalTheme().fontColor.mix(getGlobalTheme().backgroundColor)};
	cursor: default;
`

export const Card = ({ onClick, icon: Icon, label, isDisabled }) =>
	isDisabled ? (
		<DisabledCardContainer>
			<Icon />
			<CardLabel>{label}</CardLabel>
		</DisabledCardContainer>
	) : (
		<ActiveCardContainer onClick={onClick}>
			<Icon />
			<CardLabel>{label}</CardLabel>
		</ActiveCardContainer>
	)