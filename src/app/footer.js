import React from 'react'
import styled from 'styled-components'
import ThemePicker from './theme-picker'

const StyledFooter = styled.div`
	text-align: center;
	padding: 20vh 1em 5vh;
	display: flex;
	flex-direction: column;
`
const ByLine = styled.div`
	margin-bottom: 1em;
`

const AppHeader = () => {
	return (
		<StyledFooter>
			<ByLine>
				Created&nbsp;by&nbsp;<a
					href="https://paularmer.website"
					target="_blank"
					rel="noreferrer"
				>Paul Armer</a>
			</ByLine>
			<ThemePicker />
		</StyledFooter>
	)
}

export default AppHeader