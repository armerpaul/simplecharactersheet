import React from 'react';
import styled from 'styled-components'

const StyledAppHome = styled.div`

`
const GameList = styled.div`

`
const MyCharacters = styled.div`

`

const AppHome = () => {
	return (
		<StyledAppHome>
			<GameList>
				{/* <CreateCharacter game="motw" name="Monster of the Week" />
				<CreateCharacter game="bitd" name="Blades in the Dark" /> */}
			</GameList>
			<MyCharacters>
			</MyCharacters>
		</StyledAppHome>
	)
}

export default AppHome