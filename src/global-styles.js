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
	backgroundColor: 'hsl(255, 15%, 7.1%)',
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

const BaseButton = styled.button`
	padding: 0.4em 0.6em;
	font-size: inherit;
	cursor: pointer;
	outline: none;
	border: none;
	border-radius: 0.25em;
	display: flex;
	flex-direction: row;
	align-items: center;
`

const ButtonText = styled.span`
	font-size: 0.8em;
	margin-left: 0.2em;
	font-weight: bold;
`
const StyledButton = styled(BaseButton)`
	background: ${getGlobalTheme().fontColor};
	color: ${getGlobalTheme().backgroundColor};
	transition-property: background;
	transition-duration: 0.25s;

	&:hover {
		background: ${getGlobalTheme().linkColor};
	}
`
export const Button = ({ icon: Icon, label, ...props}) => (
	<StyledButton title={label} {...props}>
		<Icon /><ButtonText>{label}</ButtonText>
	</StyledButton>
)

const Hidden = styled.span`
	display: none;
`
const StyledIconButton = styled(BaseButton)`
	background: none;

	svg{
		fill: ${getGlobalTheme().fontColor};
		transition-property: fill;
		transition-duration: 0.25s;
	}

	&:hover svg {
		fill: ${getGlobalTheme().linkColor};
	}
`
export const IconButton = ({ icon: Icon, label, ...props }) => (
	<StyledIconButton title={label} {...props}>
		<Icon />
		<Hidden>{label}</Hidden>
	</StyledIconButton>
)