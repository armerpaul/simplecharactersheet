import styled from 'styled-components'
import { getGlobalTheme } from './themes'

const BaseButton = styled.button`
	background: ${getGlobalTheme().fontColor.string()};
	color: ${getGlobalTheme().containerColor.string()};
	width: 100%;
	text-align: center;
	padding: 0.5em;
	margin: 0;
	font-size: inherit;
	cursor: pointer;
	outline: 0 solid;
	border: 0 solid;
	border-radius: 0;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	transition-property: background opacity;
	transition-duration: 0.25s;

	* {
		text-decoration: none;
	}

	&:not(:disabled) {
		&:hover, &:focus {
			background: ${getGlobalTheme().linkColor.string()};
		}

		&:active {
			color: ${getGlobalTheme().fontColor.string()};
		}
	}

	&:disabled {
		background: ${getGlobalTheme().fontColor.string()};
		opacity: 0.6;
		cursor: not-allowed;
	}
`
const ButtonText = styled.span`
	margin-left: 0.2em;
	font-weight: bold;
`
export const Button = ({ icon: Icon, label, ...props}) => (
	<BaseButton {...props}>
		<Icon /><ButtonText>{label}</ButtonText>
	</BaseButton>
)

const Hidden = styled.span`
	display: none;
`
const StyledIconButton = styled(BaseButton)`
	font-size: 1.15em;

	svg{
		fill: ${getGlobalTheme().containerColor.string()};
		transition-property: fill;
		transition-duration: 0.25s;
	}

	&:not(:disabled) {
		&:focus, &:active {
			svg {
				fill: ${getGlobalTheme().fontColor.string()};
			}
		}
	}
`
export const IconButton = ({ icon: Icon, label, ...props }) => (
	<StyledIconButton title={label} {...props}>
		<Icon />
		<Hidden>{label}</Hidden>
	</StyledIconButton>
)