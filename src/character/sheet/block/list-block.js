import React from 'react'
import * as R from 'ramda'
import ReactMarkdown from 'react-markdown'
import styled from 'styled-components'
import { CheckboxInput, TextInput, getGlobalTheme } from '../../../global-styles'

const StyledListItem = styled.div`
	display: flex;
	align-items: flex-start;
	margin-bottom: 0.25em;
`
const ListItemText = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1 1 100%;
	cursor: pointer;
`
const ListItemValue = styled.div`
	ul {
		list-style-type: '${getGlobalTheme().sublistBullet}';
	}
	p {
		margin-block-start: 0;
    margin-block-end: 0;
	}
`
const BulletSpace = styled.div`
	width: 2.15em;
	height: 1.5em;
	display: flex;
	justify-content: flex-end;
	align-items: baseline;
	padding-right: 0.35em;
`
const Spacer = styled.div`
	margin-bottom: 0.5em;
`

const ListItem = ({
	name,
	index,
	isChecked,
	isEditing,
	setItemValue,
	value,
	showAdditionalInfo,
	additionalInfoValue,
}) => {
	const key = `${name} ${index}`

	return (isEditing || isChecked) ? (
		<StyledListItem key={key}>
			<BulletSpace>
				{isEditing ? (
					<CheckboxInput
						id={key}
						name={key}
						checked={isChecked}
						onChange={() => setItemValue({ index, newValue: !isChecked })}
					/>
				) : (
					getGlobalTheme().listBullet
				)}
			</BulletSpace>
			<ListItemText>
				<ListItemValue onClick={() => setItemValue({ index, newValue: !isChecked })}>
					{value && <ReactMarkdown children={value} />}
					{!isEditing && <ReactMarkdown children={additionalInfoValue} />}
				</ListItemValue>
				{isEditing && showAdditionalInfo && isChecked && [
					<TextInput
						key="additional-info"
						value={typeof additionalInfoValue === 'string' ? additionalInfoValue : ''}
						onChange={event => setItemValue({ index, newValue: event.target.value })}
					/>,
					<Spacer key="spacer" />
				]}
			</ListItemText>
		</StyledListItem>
	) : null
}

const StyledListBlock = styled.div``

const ListBlock = ({
	name,
	pick,
	items,
	other,
	path,
	value,
	alwaysEditable,
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

	if (!items) {
		throw new Error(`items not defined for '${name}'`)
	}

	const isEditable = isEditing || alwaysEditable

	const setItemValue = ({ index, newValue }) => {
		if (!isEditable) {
			return
		}

		const newChecklist = {
			...checklist,
			[index]: newValue,
		}
		updateCharacter({
			path,
			value: newChecklist,
		})
	}

	if (!isEditable && checkCount === 0) {
		return null
	}

	const showPick = isEditing && typeof pick === 'number'
	return (
		<StyledListBlock>
			{showPick && (
				<span key="pick">Pick {pick} {checkCount !== pick && '⚠️'}</span>
			)}
			{items.map((item, index) => {
				const additionalInfo = R.prop(index, checklist)
				const isChecked = additionalInfo === undefined
					? pick === 'all'
					: !!additionalInfo

				return (isEditable || isChecked) && (
					<ListItem
						name={name}
						index={index}
						isEditing={isEditable}
						isChecked={isChecked}
						setItemValue={setItemValue}
						value={item}
						showAdditionalInfo={showItemAdditionalInfo}
						additionalInfoValue={additionalInfo}
					/>
				)
			})}
			{showOther && (
				<ListItem
					name={name}
					index={'other'}
					isEditing={isEditable}
					isChecked={checklist['other']}
					setItemValue={setItemValue}
					showTextInput={true}
					value={isEditable && "other"}
					showAdditionalInfo={true}
					additionalInfoValue={checklist['other']}
				/>
			)}
		</StyledListBlock>
	)
}

export default ListBlock