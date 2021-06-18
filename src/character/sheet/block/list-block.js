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
	path,
	value,
	isEditing,
	updateCharacter
}) => {
	const checklist = value || {}
	const [otherValue, setOtherValue] = React.useState('')

	const showOther = other && (isEditing || checklist['other'])
	const checkCount = Object.keys(checklist).reduce(
		(count, key) => count + (checklist[key] ? 1 : 0),
		0
	)

	const toggleCheck = index => {
		if (!isEditing) {
			return
		}

		const newChecklist = {
			...checklist,
			[index]: !checklist[index],
		}
		updateCharacter({
			path,
			value: newChecklist,
		})
	}

	return [
		isEditing && pick && (
			<span key="pick">Pick {pick} {checkCount > pick && '⚠️'}</span>
		),
		...items.map((item, index) => {
			const key = `${name} ${index}`
			return (isEditing || checklist[index]) && (
				<ListItem
					key={key}
				>
					{isEditing && (
						<input
							id={key}
							name={key}
							checked={checklist[index]}
							type="checkbox"
							onClick={() => toggleCheck(index)}
						/>
					)}
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
				{isEditing ? (
					<>
						<input
							id={`${name} other`}
							name={`${name} other`}
							checked={checklist['other']}
							type="checkbox"
							onClick={() => toggleCheck('other')}
						/>
						<input
							type="text"
							onChange={event => {
								setOtherValue(event.target.value)
							}}
						/>
					</>
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