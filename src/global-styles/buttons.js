import React from 'react'
import styled from 'styled-components'
import { getGlobalTheme } from './themes'

const BaseButton = styled.button`
	width: 100%;
	text-align: center;
	padding: 0.3em 0.75em;
	margin: 0;
	font-size: inherit;
	cursor: pointer;
	outline: 0 solid;
	border: 0 solid;
	border-radius: 0.15em;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;

	* {
		text-decoration: none;
	}

	&:disabled {
		background: ${getGlobalTheme().fontColor};
		opacity: 0.6;
		cursor: not-allowed;
	}
`

const ButtonText = styled.span`
	margin-left: 0.2em;
	font-weight: bold;
`
const StyledButton = styled(BaseButton)`
	background: ${getGlobalTheme().linkColor};
	color: ${getGlobalTheme().backgroundColor};
	transition-property: background opacity;
	transition-duration: 0.25s;

	&:not(:disabled) {
		&:hover, &:focus {
			background: ${getGlobalTheme().linkColor.mix(getGlobalTheme().fontColor)};
		}

		&:active {
			background: ${getGlobalTheme().fontColor};
		}
	}


	svg {
		font-size: 1.75em
	}
`
export const Button = ({ icon: Icon, label, ...props}) => (
	<StyledButton {...props}>
		<Icon /><ButtonText>{label}</ButtonText>
	</StyledButton>
)

const Hidden = styled.span`
	display: none;
`
const StyledIconButton = styled(BaseButton)`
	background: none;

	svg{
		fill: ${getGlobalTheme().linkColor};
		transition-property: fill;
		transition-duration: 0.25s;
	}

	&:not(:disabled) {
		&:hover, &:focus {
			svg {
				fill: ${getGlobalTheme().linkColor.mix(getGlobalTheme().fontColor)};
			}
		}

		&:active svg {
			fill: ${getGlobalTheme().fontColor};
		}
	}


	&:hover svg {
		fill: ${getGlobalTheme().linkColor};
	}
`
export const IconButton = ({ icon: Icon, label, ...props }) => (
	<StyledIconButton title={label} {...props}>
		<Icon />
		<Hidden>{label}</Hidden>
	</StyledIconButton>
)