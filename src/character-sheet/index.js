import React from 'react'
import styled from 'styled-components'
import SheetBlock from './sheet-block'
import Stats from './stats'

import gameData from './motw/base.json'
import sheetData from './motw/chosen.json'

const SheetContainer = styled.div`
	max-width: 50rem;
	margin-left: auto;
	margin-right: auto;
`

const CharacterSheet = ({ game }) => {
	const [isEditing, setIsEditing] = React.useState(false)

	const { name, description, sheet } = sheetData
	const { stats } = gameData

	return (
		<SheetContainer>
			<h1>{name}</h1>
			<label
				htmlFor="isEditing"
			>
				<span>Editing:</span>
				<input
					id="isEditing"
					type="checkbox"
					onChange={() => setIsEditing(!isEditing)}
					checked={isEditing}
				/>
			</label>
			<p>{description}</p>

			<Stats {...stats} isEditing={isEditing} />

			{sheet.map((block, index) => (
				<SheetBlock
					{...block}
					key={`block-${index}`}
					isEditing={isEditing}
				/>
			))}
		</SheetContainer>
	)
}

export default CharacterSheet