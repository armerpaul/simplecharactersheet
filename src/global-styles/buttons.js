import React from 'react'
import styled from 'styled-components'
import { getGlobalTheme } from './themes'

const BaseButton = styled.button`
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

	&:disabled {
		opacity: 0.6;
		cursor: not-allowed;
	}
`

const ButtonText = styled.span`
	font-size: 0.8em;
	margin-left: 0.2em;
	font-weight: bold;
`
const StyledButton = styled(BaseButton)`
	background: ${getGlobalTheme().fontColor};
	color: ${getGlobalTheme().backgroundColor};
	transition-property: background opacity;
	transition-duration: 0.25s;

	&:not(:disabled):hover {
		background: ${getGlobalTheme().linkColor};
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
		fill: ${getGlobalTheme().fontColor};
		transition-property: fill;
		transition-duration: 0.25s;
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