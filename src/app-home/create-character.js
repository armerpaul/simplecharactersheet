import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledCreateCharacter = styled.div`

`

const CreateCharacter = ({ game, name }) => {
	return (
		<Link to={`${game}/character`}>
			<StyledCreateCharacter>
				Create a {name} character
			</StyledCreateCharacter>
		</Link>
	)
}

export default CreateCharacter