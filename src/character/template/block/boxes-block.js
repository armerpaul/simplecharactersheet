import React from 'react'
import styled from 'styled-components'
import { CheckboxInput } from '../../../global-styles'

const BoxesContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	margin-bottom: 0.75em;
`

const BoxesBlock = ({
	name,
	count,
	labels,
	value,
	path,
	updateCharacter,
}) => {
	const currentLevel = value || 0
	const [leftLabel, rightLabel] = labels || []
	const indexedArray = Array.from(Array(count), (_, i) => i + 1)

	const setLevel = level => {
		const newLevel = currentLevel === level ? 0 : level
		updateCharacter({
			path,
			value: newLevel,
		})
	}

	return (
		<BoxesContainer>
			<span key={`${name} left`}>{leftLabel}</span>
			{indexedArray.map(level => {
				const key = `${name} ${level}`
				return (
					<CheckboxInput
						id={key}
						key={key}
						name={name}
						checked={level <= currentLevel}
						onChange={() => setLevel(level)}
					/>
				)
			})}
			<span key={`${name} right`}>{rightLabel}</span>
		</BoxesContainer>
	)
}

export default BoxesBlock