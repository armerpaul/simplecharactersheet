import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import {
	FaMoon,
	FaCloudMoon,
	FaSun,
} from "react-icons/fa";
import {
	getGlobalTheme,
	setGlobalTheme,
	LIGHT_THEME,
	DIM_THEME,
	DARK_THEME,
} from '../global-styles'

const StyledHeader = styled.header`
	padding: 0.5em 1.5em;
	font-size: 1.25rem;
	opacity: 0.4;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	transition-property: opacity;
	transition-duration: 0.25s;

	&:hover {
		opacity: 0.6;
	}
`

const HomeLink = styled(Link)`
	text-decoration: none;
`
const ThemeToggleList = styled.div`
	display: flex;
	flex-direction: row;
`
const ThemeToggle = styled.a.attrs({ href: '#' })`
	margin-left: 0.5em;

	svg{
		transition-property: fill;
		transition-duration: 0.25s;

		&:hover {
			fill: ${getGlobalTheme().linkColor};
		}
	}
`

const AppHeader = () => {
	return (
		<StyledHeader>
			<HomeLink to="/">Simple Character Sheet</HomeLink>
			<ThemeToggleList>
				<ThemeToggle onClick={() => setGlobalTheme(LIGHT_THEME)}>
					<FaSun />
				</ThemeToggle>
				<ThemeToggle onClick={() => setGlobalTheme(DIM_THEME)}>
					<FaMoon />
				</ThemeToggle>
				<ThemeToggle onClick={() => setGlobalTheme(DARK_THEME)}>
					<FaCloudMoon />
				</ThemeToggle>
			</ThemeToggleList>
		</StyledHeader>
	)
}

export default AppHeader