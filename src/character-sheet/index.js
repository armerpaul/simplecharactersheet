import React from 'react'
import SheetBlock from './sheet-block'

import baseSheet from './motw/base.json'
import sheetData from './motw/chosen.json'

const CharacterSheet = ({ game }) => {
	const { name, description, sheet } = sheetData
	const sheetBlocks = [
		...baseSheet,
		...sheet
	]

	return (
		<div>
			<h1>{name}</h1>
			<p>{description}</p>
			{sheetBlocks.map(block => <SheetBlock {...block} />)}
		</div>
	)
}

export default CharacterSheet