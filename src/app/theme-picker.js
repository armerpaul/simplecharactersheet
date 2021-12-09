import React from 'react'
import styled from 'styled-components'
import {
	GiSun as LightIcon,
	GiMoonBats as DarkIcon,
} from "react-icons/gi";
import {
	setGlobalTheme,
	IconButton,
	LIGHT_THEME,
	DARK_THEME,
} from '../global-styles'

const ThemeToggleList = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
`
const ThemeToggle = styled(IconButton)`
	margin-left: 0.5em;
	padding: 0.2em;
`

const ThemePicker = () => (
	<ThemeToggleList>
		<ThemeToggle
			icon={LightIcon}
			onClick={() => setGlobalTheme(LIGHT_THEME)}
		/>
		<ThemeToggle
			icon={DarkIcon}
			onClick={() => setGlobalTheme(DARK_THEME)}
		/>
	</ThemeToggleList>
)

export default ThemePicker