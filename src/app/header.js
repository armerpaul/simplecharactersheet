import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import ThemePicker from './theme-picker'
import { TABLET_SIZE } from '../global-styles'

const StyledHeader = styled.header`
	padding: 0.5em 0.75rem;
	font-size: 1.25rem;
	opacity: 0.7;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	transition-property: opacity;
	transition-duration: 0.25s;

	&:hover {
		opacity: 1;
	}

	@media (min-width: ${TABLET_SIZE}) {
		padding: 0.75em 1.5em;
	}
`

const HomeLink = styled(Link)`
	text-decoration: none;
`

const AppHeader = () => {
	return (
		<StyledHeader>
			<HomeLink to="/">Simple Character Sheet</HomeLink>
			<ThemePicker />
		</StyledHeader>
	)
}

export default AppHeader