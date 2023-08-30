import React from 'react'
import styled from 'styled-components'
import { getGlobalTheme } from './themes'
import { GiCheckMark as CheckedIcon } from 'react-icons/gi'

const inputColorStyles = `
	color: ${getGlobalTheme().fontColor};
	border: 0.15rem solid ${getGlobalTheme().fontColor};
	background-color: ${
		getGlobalTheme().backgroundColor.mix(getGlobalTheme().fontColor, 0.05)
	};

	transition-property: border-color background-color;
	transition-duration: 0.25s;

	&:active, &:focus, &:hover {
		border-color: ${getGlobalTheme().fontColor}
	}

	&:hover {
		background-color: ${
			getGlobalTheme().backgroundColor.mix(getGlobalTheme().fontColor, 0.1)
		};
	}

	&:active, &:focus {
		background-color: ${
			getGlobalTheme().backgroundColor.mix(getGlobalTheme().fontColor, 0.15)
		};
	}
`
const inputDisabledStyles = `
	cursor: not-allowed;
	opacity: 0.5;
`

const BaseInput = styled.input`
	${inputColorStyles}
	outline: 0 solid;
	font-size: inherit;
	font-family: inherit;

	&:disabled {
		${inputDisabledStyles}
	}
`

export const RadioInput = styled(BaseInput).attrs({ type: 'radio' })`
	cursor: pointer;
`
export const TextInput = styled(BaseInput).attrs({ type: 'text' })`
	border-left: none;
	border-top: none;
	border-right: none;
	border-bottom-color: transparent;
	padding: 0.3em 0.5em 0.2em;

	&:focus {
		border-bottom-color: ${getGlobalTheme().linkColor};
	}
`

export const TextareaInput = styled.textarea`
	border-left: none;
	border-top: none;
	border-right: none;
	border-bottom-color: transparent;
	padding: 0.3em 0.5em 0.2em;
	width: 100%;
	min-height: 8rem;
	
	${inputColorStyles}
	outline: 0 solid;
	font-size: inherit;
	font-family: inherit;

	&:disabled {
		${inputDisabledStyles}
	}
`

const StyledCheckboxInput = styled.div`
	${inputColorStyles}
	cursor: pointer;
	width: 1em;
	height: 1em;
	flex: 0 0 1em;
	overflow: visible;
	position: relative;
	margin: 0 0.25em;

	${props => props.disabled ? inputDisabledStyles : ''}

	svg {
		opacity: ${props => props.checked ? '1' : '0'};
		position: absolute;
		font-size: 1.5em;
		top: -0.325em;
		left: 0;
	}

	input {
		appearance: none;
	}
`

export const CheckboxInput = ({ onChange, value, ...props }) => {
	const toggleValue = () => onChange(props.checked ? null : value)
	return (
		<StyledCheckboxInput
			checked={props.checked}
			onClick={toggleValue}
		>
			<input type="checkbox" {...props} onChange={toggleValue} />
			<CheckedIcon />
		</StyledCheckboxInput>
	)
}