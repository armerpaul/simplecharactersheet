import React from 'react'

const BoxesBlock = ({ name, count, labels }) => {
	const [leftLabel, rightLabel] = labels || []
	const indexedArray = Array.from(Array(count), (_, i) => i)

	return [
		<span key={`${name} left`}>{leftLabel}</span>,
		...indexedArray.map(item => {
			const key = `${name} ${item}`
			return (
				<input key={key} name={key} type="checkbox" />
			)
		}),
		<span key={`${name} right`}>{rightLabel}</span>
	]
}

export default BoxesBlock