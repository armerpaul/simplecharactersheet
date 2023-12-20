import React from 'react'
import styled from 'styled-components'
import {
	GiSun as LightIcon,
	GiMoonBats as DarkIcon,
} from "react-icons/gi";
import {
	setGlobalTheme,
	getGlobalTheme,
	IconButton,
	TABLET_SIZE,
	LIGHT_THEME,
	DARK_THEME,
} from '../global-styles'

const ThemeToggleList = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	margin-top: 3rem;

	@media (min-width: ${TABLET_SIZE}) {
		font-size: 1.15rem;
		flex-direction: column;
		position: fixed;
		right: 0;
		bottom: 10vh;
	}
`
const ThemeToggle = styled(IconButton)`
	padding: 0.2em;
	width: 1.75rem;
	height: 1.75rem;
	margin: 0 0.5rem;

	@media (min-width: ${TABLET_SIZE}) {
		padding: 0.3em;
		width: 2rem;
		height: 2rem;
		margin: 0;
	}

	${({ isActive }) => isActive && `
		background: ${getGlobalTheme().linkColor};

		svg {
			fill: ${getGlobalTheme().fontColor};
		}
	`}
`

const ThemePicker = () => {
	const themeName = getGlobalTheme().name

	return (
		<ThemeToggleList>
			<ThemeToggle
				icon={LightIcon}
				isActive={themeName === LIGHT_THEME}
				onClick={() => setGlobalTheme(LIGHT_THEME)}
			/>
			<ThemeToggle
				icon={DarkIcon}
				isActive={themeName === DARK_THEME}
				onClick={() => setGlobalTheme(DARK_THEME)}
			/>
		</ThemeToggleList>
	)
}

export default ThemePicker