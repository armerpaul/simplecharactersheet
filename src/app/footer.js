import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.div`
	text-align: center;
	padding: 20vh 1em 5vh;
`

const AppHeader = () => {
	return (
		<StyledFooter>
			Created&nbsp;by&nbsp;<a
				href="https://paularmer.me"
				target="_blank"
				rel="noreferrer"
			>Paul Armer</a>
		</StyledFooter>
	)
}

export default AppHeader