import React from 'react'
import SheetBlock from './sheet-block'

import baseSheet from './motw/base.json'
import sheetData from './motw/chosen.json'

const CharacterSheet = ({ game }) => {
	const [isEditing, setIsEditing] = React.useState(false)

	const { name, description, sheet } = sheetData
	const sheetBlocks = [
		...baseSheet,
		...sheet
	]

	return (
		<div>
			<h1>{name}</h1>
			<label
				for="isEditing"
				onClick={() => setIsEditing(!isEditing)}
			>
				<span>Editing:</span>
				<input id="isEditing" type="checkbox" />
			</label>
			<p>{description}</p>
			{sheetBlocks.map((block, index) => (
				<SheetBlock
					{...block}
					key={`block-${index}`}
					isEditing={isEditing}
				/>
			))}
		</div>
	)
}

export default CharacterSheet