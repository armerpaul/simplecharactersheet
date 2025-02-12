import { render } from 'preact';
import { LocationProvider } from 'preact-iso';
import { ClerkProvider } from '@clerk/clerk-react'

import { GlobalStyles, AppContainer } from './global-styles'
import { Header } from './components/Header.jsx'
import { Routes } from './components/Routes.jsx'

import './style.css' 

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

export function App() {
	return (
		<GlobalStyles>
			<ClerkProvider publishableKey={PUBLISHABLE_KEY}>
				<LocationProvider>
					<Header />
					<AppContainer>
						<Routes />
					</AppContainer>
				</LocationProvider>
			</ClerkProvider>
		</GlobalStyles>
	);
}

render(<App />, document.getElementById('app'));
