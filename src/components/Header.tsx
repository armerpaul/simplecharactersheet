import { useLocation } from 'preact-iso';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'

export const Header = () => {
	const { url } = useLocation();

	return (
		<header>
			<nav>
				<a href="/" class={url == '/' && 'active'}>
					Home
				</a>
				<SignedOut>
					<SignInButton />
				</SignedOut>
				<SignedIn>
					<a href="/characters" class={url == '/characters' && 'active'}>
						My Characters
					</a>
					<UserButton />
				</SignedIn>
			</nav>
		</header>
	);
}
