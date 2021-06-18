import React from 'react'
import styled from 'styled-components'

export const LIGHT_THEME = {
	name: 'Day',
	backgroundColor: 'hsl(255, 0%, 100%)',
	fontColor: 'hsl(235, 12.2%, 16.1%)',
	linkColor: 'hsl(255, 77.1%, 67.5%)'
}
export const DIM_THEME = {
	name: 'Bright Night',
	backgroundColor: 'hsl(255, 15%, 15.7%)',
	fontColor: 'hsl(235, 18.8%, 72.9%)',
	linkColor: 'hsl(255, 77.1%, 67.5%)'
}
export const DARK_THEME = {
	name: 'Foggy Night',
	backgroundColor: 'hsl(255, 27.8%, 7.1%)',
	fontColor: 'hsl(235, 17.4%, 82%)',
	linkColor: 'hsl(255, 50%, 50%)'
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
		color: ${theme => theme.fontColor};
		transition-property: color;
		transition-duration: 0.3s;

		&:hover {
			color: ${theme => theme.linkColor};
		}
	}
`

const THEME_LS_KEY = 'scs-theme'
let globalTheme

export const setGlobalTheme = theme => {
	if (!theme || (globalTheme && theme.name === globalTheme.name)) {
		return
	}
	localStorage.setItem(THEME_LS_KEY, JSON.stringify(theme))
	window.location.reload()
}

export const getGlobalTheme = () => {
	try {
		if (!globalTheme) {
			const raw = localStorage.getItem(THEME_LS_KEY)
			globalTheme = raw ? JSON.parse(raw) : LIGHT_THEME
		}
		console.log({ globalTheme })
		return globalTheme
	} catch {
		return LIGHT_THEME
	}
}

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