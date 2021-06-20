import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import {
	GiSun as LightIcon,
	GiWitchFlight as DimIcon,
	GiMoonBats as DarkIcon,
} from "react-icons/gi";
import {
	setGlobalTheme,
	IconButton,
	TABLET_SIZE,
	LIGHT_THEME,
	DIM_THEME,
	DARK_THEME,
} from '../global-styles'

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
const ThemeToggleList = styled.div`
	display: flex;
	flex-direction: row;
`
const ThemeToggle = styled(IconButton)`
	margin-left: 0.5em;
	padding: 0.2em;
`

const AppHeader = () => {
	return (
		<StyledHeader>
			<HomeLink to="/">Simple Character Sheet</HomeLink>
			<ThemeToggleList>
				<ThemeToggle
					icon={LightIcon}
					onClick={() => setGlobalTheme(LIGHT_THEME)}
				/>
				<ThemeToggle
					icon={DimIcon}
					onClick={() => setGlobalTheme(DIM_THEME)}
				/>
				<ThemeToggle
					icon={DarkIcon}
					onClick={() => setGlobalTheme(DARK_THEME)}
				/>
			</ThemeToggleList>
		</StyledHeader>
	)
}

export default AppHeader