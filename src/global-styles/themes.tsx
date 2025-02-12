import styled from 'styled-components'
import Color from 'color'
import { useState, useEffect } from 'preact/hooks'

export const LIGHT_THEME = 'Morning Sun'
export const DIM_THEME = 'Witch Moon'
export const DARK_THEME = 'Bat Night'

const BASE_STYLES = {
	linkColor: new Color('#ef3e27'),
	listBullet: '►',
	sublistBullet: '▻',
}
const stylesByTheme = {
	[LIGHT_THEME]: {
		...BASE_STYLES,
		name: LIGHT_THEME,
		backgroundColor: new Color('#ede7df'),
		containerColor: new Color('#f6f3ef'),
		fontColor: new Color('#2e1f22'),
	},
	[DARK_THEME]: {
		...BASE_STYLES,
		name: DARK_THEME,
		backgroundColor: new Color('#25191b'),
		containerColor: new Color('#332225'),
		fontColor: new Color('#f6f3ef'),
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
	background: ${theme => theme.backgroundColor.string()};
	color: ${theme => theme.fontColor.string()};
	min-height: 100vh;
	font-size: 1rem;

	p {
		margin-top: 0;
		margin-bottom: 0.25em;
	}

	ul {
		margin-top: 0.75em;
		padding-left: 2.15em;
		list-style-type: '${getGlobalTheme().listBullet}';

		li {
			padding-left: 0.35em;
			margin-bottom: 0.25em;

			ul {
				list-style-type: '${getGlobalTheme().sublistBullet}';
			}
		}
	}

	blockquote {
		margin: 0;
		margin-top: 0.5em;
		margin-left: 1.15em;

		+ blockquote {
			margin-top: 0.2em;
		}
	}

	h1 {
		margin-top: 0.5rem;
		font-size: 1.5rem;
	}

	h2 {
		font-size: 1.35rem;
		margin-top: 1em;
		margin-bottom: 0.25em;
	}

	h3 {
		font-size: 1.1rem;
		margin-top: 0.75em;
		margin-bottom: 0.25em;
	}

	h4 {
		font-size: 1rem;
		margin-top: 0.5em;
		margin-bottom: 0.25em;
	}

	a {
		color: ${theme => theme.linkColor.string()};
		transition-property: color;
		transition-duration: 0.3s;
		font-weight: bold;
		text-decoration: none;

		&:hover, &:focus {
			color: ${getGlobalTheme().linkColor.mix(getGlobalTheme().fontColor).string()};
		}

		&:active {
			color: ${getGlobalTheme().fontColor.string()};
		}
	}
`

export const GlobalStyles = ({ children }) => {
	const [theme, setTheme] = useState(stylesByTheme[LIGHT_THEME])
	useEffect(() => {
		setTheme(getGlobalTheme())
	}, [])
	return (
		<ThemedStyles {...theme}>
			{children}
		</ThemedStyles>
	)
}