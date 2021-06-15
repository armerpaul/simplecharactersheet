import React from 'react'
import ReactMarkdown from 'react-markdown'

import BoxesBlock from './boxes-block'
import ListBlock from './list-block'
import StatsBlock from './stats-block'

const SheetBlock = ({
	name,
	hideName,
	type,
	description,
	level,
	...otherArgs
}) => {
	const header = !hideName && (
		level > 0 ? (
			<ReactMarkdown children={`### ${name}`} />
		) : (
			<ReactMarkdown children={`## ${name}`} />
		)
	)

	let contents
	switch (type) {
		case 'boxes':
			contents = <BoxesBlock name={name} {...otherArgs} />
			break
		case 'list':
			contents = <ListBlock name={name} {...otherArgs} />
			break
		case 'stats':
			contents = <StatsBlock name={name} {...otherArgs} />
			break
		case 'parent':
			const { children } = otherArgs
			contents = children.map(child => <SheetBlock
				{...child}
				level={level ? level + 1 : 1}
			/>)
			break
		default:
			break
	}

	return (
		<div key="name">
			{header}
			<ReactMarkdown children={description} />
			{contents}
		</div>
	)

}

export default SheetBlock