import React from 'react'

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

	return [
		<span key={`${name} left`}>{leftLabel}</span>,
		...indexedArray.map(level => {
			const key = `${name} ${level}`
			return (
				<input
					id={key}
					key={key}
					name={name}
					type="checkbox"
					checked={level <= currentLevel}
					onChange={() => setLevel(level)}
				/>
			)
		}),
		<span key={`${name} right`}>{rightLabel}</span>
	]
}

export default BoxesBlock