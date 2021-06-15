import React from 'react'
import ReactMarkdown from 'react-markdown'
import styled from 'styled-components'

const ListItem = styled.div`
	display: flex;
	align-items: flex-start;
`

const Label = styled.label`
	p {
		margin-block-start: 0;
    margin-block-end: 0;
	}
`

const ListBlock = ({
	name,
	pick,
	items,
	other,
	isEditing
}) => {
	const [checklist, setChecklist] = React.useState({})
	const [lastChecked, setLastChecked] = React.useState('other')
	const [otherValue, setOtherValue] = React.useState('')

	const showOther = other && (isEditing || checklist['other'])

	const toggleCheck = index => {
		if (!isEditing) {
			return
		}
		const totalChecked = Object.keys(checklist).reduce(
				(count, key) => count + (checklist[key] ? 1 : 0),
				0
			)

		let lastCheckedValue = checklist[lastChecked]
		const newValue = !checklist[index]

		// if adding a check
		if (newValue && totalChecked >= pick) {
			lastCheckedValue = false
		}

		const newChecklist = {
			...checklist,
			[lastChecked]: lastCheckedValue,
			[index]: newValue,
		}
		console.log({ totalChecked, newChecklist })
		setChecklist(newChecklist)
		setLastChecked(index)
	}

	return [
		...items.map((item, index) => {
			const key = `${name} ${index}`
			return (isEditing || checklist[index]) && (
				<ListItem
					key={key}
				>
					<input
						id={key}
						name={key}
						checked={checklist[index]}
						type="checkbox"
						onClick={() => toggleCheck(index)}
					/>
					<Label htmlFor={key}>
						<ReactMarkdown children={item} />
					</Label>
				</ListItem>
			)
		}),
		showOther && (
			<ListItem
				key={`${name} other`}
			>
				<input
					id={`${name} other`}
					name={`${name} other`}
					checked={checklist['other']}
					type="checkbox"
					onClick={() => toggleCheck('other')}
				/>

					{isEditing ? (
						<input
							type="text"
							onChange={event => {
								setOtherValue(event.target.value)
							}}
						/>
					) : (
						<Label htmlFor={`${name} other`}>
							<ReactMarkdown children={otherValue} />
						</Label>
					)}
			</ListItem>
		)
	]
}

export default ListBlock