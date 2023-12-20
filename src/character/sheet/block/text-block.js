import React from 'react'
import * as R from 'ramda'
import ReactMarkdown from 'react-markdown'
import styled from 'styled-components'
import { TextareaInput } from '../../../global-styles'

const TextBlock = ({
	name,
	value,
	placeholder,
	defaultValue,
	isEditing,
	updateCharacter,
	isEditable,
	path,
}) => {
	const setTextValue = newValue => {
		if (!isEditable) {
			return
		}

		updateCharacter({
			path,
			value: newValue,
		})
	}

	const displayValue = value ?? defaultValue
	return isEditing ? (
		<TextareaInput 
			key={name} 
			value={displayValue} 
			placeholder={placeholder}
			onChange={event => setTextValue(event.target.value)}
		/>
	) : (
		<ReactMarkdown 
			key={name}
			children={displayValue} 
		/>
	)
}

export default TextBlock