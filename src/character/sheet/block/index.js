import React from 'react'
import ReactMarkdown from 'react-markdown'
import styled from 'styled-components'

import BoxesBlock from './boxes-block'
import ListBlock from './list-block'

const StyledBlock = styled.div`
	padding-right: 1em;
`

const BlockTypes = {
	boxes: BoxesBlock,
	list: ListBlock,
}

const headerForLevel = {
	0: '##',
	1: '###',
	2: '###',
	3: '####',
}

const SheetBlock = ({
	hideName,
	type,
	description,
	editDescription,
	parents = [],
	...otherArgs
}) => {
	// pulled out separately so otherArgs contains all the good stuff
	const { name, displayName, value, isEditing, updateCharacter } = otherArgs
	const path = [...parents, name]

	let contents
	if ('parent' === type) {
		const { children } = otherArgs
		contents = children.map(child => {
			return (
				<SheetBlock
					{...child}
					key={`${name} ${child.name}`}
					value={value && value[child.name]}
					updateCharacter={updateCharacter}
					isEditing={isEditing}
					parents={path}
				/>
			)
		})
	} else {
		const BlockType = BlockTypes[type]
		contents = BlockType && (
			<BlockType key={name} path={path} {...otherArgs} />
		)
	}

	const blockTitle = displayName || name

	return (
		<StyledBlock key={name}>
			{blockTitle && !hideName && (
				<ReactMarkdown
					key="header"
					children={`${headerForLevel[parents.length]} ${blockTitle}`}
				/>
			)}
			{description && (
				<ReactMarkdown key="description" children={description} />
			)}
			{editDescription && isEditing && (
				<ReactMarkdown key="editDescription" children={editDescription} />
			)}
			{contents}
		</StyledBlock>
	)
}

export default SheetBlock