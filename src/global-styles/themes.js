import React from 'react'
import styled from 'styled-components'
import Color from 'color'

export const LIGHT_THEME = 'Morning Sun'
export const DIM_THEME = 'Witch Moon'
export const DARK_THEME = 'Bat Night'

const stylesByTheme = {
	[LIGHT_THEME]: {
		backgroundColor: new Color('#ede7df'),
		containerColor: new Color('#f6f3ef'),
		fontColor: new Color('#2e1f22'),
		linkColor: new Color('#ef3e27')
	},
	[DARK_THEME]: {
		backgroundColor: new Color('#25191b'),
		containerColor: new Color('#332225'),
		fontColor: new Color('#f6f3ef'),
		linkColor: new Color('#ef3e27')
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
	font-size: 14px;

	p {
		margin-top: 0;
	}

	h1 {
		margin-top: 0.5rem;
		font-size: 1.5rem;
	}

	h2 {
		font-size: 1.25rem;
		margin-top: 0.25em;
		margin-bottom: 0.5em;
	}

	h3 {
		font-size: 1rem;
		margin-top: 0.25em;
		margin-bottom: 0.25em;
	}

	h4 {
		font-size: 1rem;
		margin-top: 0.25em;
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