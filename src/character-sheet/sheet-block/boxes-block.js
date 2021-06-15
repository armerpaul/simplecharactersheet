import React from 'react'

const BoxesBlock = ({ name, count, labels }) => {
	const [leftLabel, rightLabel] = labels || []
	return [
		<span label="left">{leftLabel}</span>,
		...Array.from(Array(count), (_, i) => i).map(item => {
			const key = `${name} ${item}`
			return (
				<input key={key} name={key} type="checkbox" />
			)
		}),
		<span label="right">{rightLabel}</span>
	]
}

export default BoxesBlock