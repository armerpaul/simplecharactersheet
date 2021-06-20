import React from 'react'
import styled from 'styled-components'
import Color from 'color'

export const LIGHT_THEME = 'Morning Sun'
export const DIM_THEME = 'Witch Moon'
export const DARK_THEME = 'Bat Night'

const stylesByTheme = {
	[LIGHT_THEME]: {
		backgroundColor: new Color('hsl(255, 0%, 100%)'),
		fontColor: new Color('hsl(235, 12.2%, 16.1%)'),
		linkColor: new Color('hsl(255, 77.1%, 67.5%)')
	},
	[DIM_THEME]: {
		backgroundColor: new Color('hsl(255, 15%, 15.7%)'),
		fontColor: new Color('hsl(235, 18.8%, 72.9%)'),
		linkColor: new Color('hsl(255, 77.1%, 67.5%)')
	},
	[DARK_THEME]: {
		backgroundColor: new Color('hsl(255, 15%, 7.1%)'),
		fontColor: new Color('hsl(235, 17.4%, 82%)'),
		linkColor: new Color('hsl(255, 50%, 50%)')
	}
}

const THEME_LS_KEY = 'scs-theme'
let globalTheme

export const setGlobalTheme = theme => {
	if (!theme || (theme === globalTheme)) {
		return
	}
	localStorage.setItem(THEME_LS_KEY, theme)
	window.location.reload()
}

export const getGlobalTheme = () => {
	if (!globalTheme) {
		try {
			const shouldDefaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches
			const defaultTheme = shouldDefaultDark ? DARK_THEME : LIGHT_THEME
			globalTheme = localStorage.getItem(THEME_LS_KEY) || defaultTheme
		} catch (e) {
			console.error(e)
		}
	}
	return stylesByTheme[globalTheme] || stylesByTheme[LIGHT_THEME]
}

const ThemedStyles = styled.div`
  background: ${theme => theme.backgroundColor};
  color: ${theme => theme.fontColor};
	min-height: 100vh;

	p {
		margin-top: 0;
	}

	h2 {
		margin-bottom: 0.5em;
	}

	h3 {
		margin-bottom: 0.25em;
	}

	h4 {
		margin-bottom: 0.25em;
	}

	a {
		color: ${theme => theme.linkColor};
		transition-property: color;
		transition-duration: 0.3s;
		font-weight: bold;
		text-decoration: none;

		&:hover, &:focus {
			color: ${getGlobalTheme().linkColor.mix(getGlobalTheme().fontColor)};
		}

		&:active {
			color: ${getGlobalTheme().fontColor};
		}
	}
`

export const GlobalStyles = ({ children }) => {
	const [theme, setTheme] = React.useState(LIGHT_THEME)
	React.useEffect(() => {
		setTheme(getGlobalTheme())
	}, [])
	return (
		<ThemedStyles {...theme}>
			{children}
		</ThemedStyles>
	)
}