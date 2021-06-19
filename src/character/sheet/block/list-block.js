import React from 'react'
import ReactMarkdown from 'react-markdown'
import styled from 'styled-components'

const ListItem = styled.div`
	display: flex;
	align-items: flex-start;
	margin-bottom: 0.25em;
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
	showItemAdditionalInfo,
	isEditing,
	updateCharacter
}) => {
	const checklist = value || {}

	const otherValue = checklist['other']
	const showOther = other && (isEditing || otherValue)

	const checkCount = Object.keys(checklist).reduce(
		(count, key) => count + (checklist[key] ? 1 : 0),
		0
	)

	const setItemValue = ({ index, value }) => {
		if (!isEditing) {
			return
		}

		const newChecklist = {
			...checklist,
			[index]: value,
		}
		updateCharacter({
			path,
			value: newChecklist,
		})
	}



	if (!isEditing && checkCount === 0) {
		console.log({
			name,
			isEditing,
			checkCount,
		})
		return null
	}

	return [
		isEditing && pick && (
			<span key="pick">Pick {pick} {checkCount !== pick && '⚠️'}</span>
		),
		...items.map((item, index) => {
			const key = `${name} ${index}`
			const isChecked = !!checklist[index]
			const additionalInfo = typeof checklist[index] === 'string' ? checklist[index] : ''

			return (isEditing || isChecked) && (
				<ListItem
					key={key}
				>
					{isEditing && (
						<input
							id={key}
							name={key}
							checked={isChecked}
							type="checkbox"
							onClick={() => setItemValue({ index, value: !isChecked })}
						/>
					)}
					<Label htmlFor={key}>
						<ReactMarkdown children={item} />
						{showItemAdditionalInfo && isChecked && (
							<input
								type="text"
								value={additionalInfo}
								onChange={event => setItemValue({ index, value: event.target.value })}
							/>
						)}
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
							onClick={() => setItemValue({ index: 'other', value: !checklist['other'] })}
						/>
						<input
							type="text"
							id={`${name} other value`}
							name={`${name} other value`}
							onChange={event => setItemValue({ index: 'other', value: event.target.value })}
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