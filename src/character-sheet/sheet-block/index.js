import React from 'react'
import ReactMarkdown from 'react-markdown'

import BoxesBlock from './boxes-block'
import ListBlock from './list-block'
import StatsBlock from './stats-block'

const BlockTypes = {
	boxes: BoxesBlock,
	list: ListBlock,
	stats: StatsBlock,
}

const SheetBlock = ({
	hideName,
	type,
	description,
	level,
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
					children={level > 0 ? `### ${name}` : `## ${name}`}
				/>
			)}
			{description && (
				<ReactMarkdown key="description" children={description} />
			)}
			{contents}
		</div>
	)

}

export default SheetBlock