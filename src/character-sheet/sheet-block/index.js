import React from 'react'
import ReactMarkdown from 'react-markdown'

import BoxesBlock from './boxes-block'
import ListBlock from './list-block'

const BlockTypes = {
	boxes: BoxesBlock,
	list: ListBlock,
}

const headerForLevel = {
	0: '##',
	1: '###',
	2: '####',
}

const SheetBlock = ({
	hideName,
	type,
	description,
	editDescription,
	level = 0,
	...otherArgs
}) => {
	const { name, isEditing } = otherArgs

	let contents
	if ('parent' === type) {
		const { children } = otherArgs
		contents = children.map((child, index) => (
			<SheetBlock
				{...child}
				isEditing={isEditing}
				key={`${name} block ${index}`}
				level={level ? level + 1 : 1}
			/>
		))
	} else {
		const BlockType = BlockTypes[type]
		contents = BlockType && (
			<BlockType {...otherArgs} />
		)
	}

	return (
		<div key={name}>
			{name && !hideName && (
				<ReactMarkdown
					key="header"
					children={`${headerForLevel[level]} ${name}`}
				/>
			)}
			{editDescription && isEditing && (
				<ReactMarkdown key="editDescription" children={editDescription} />
			)}
			{description && (
				<ReactMarkdown key="description" children={description} />
			)}
			{contents}
		</div>
	)

}

export default SheetBlock