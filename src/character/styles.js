import styled from 'styled-components'

export const CharacterContainer = styled.div`
	max-width: 50rem;
	margin-left: auto;
	margin-right: auto;
`

export const LoadingContainer = styled(CharacterContainer)`
	@keyframes pulse {
		from { opacity: 0.5 }
		to { opacity: 1 }
	}

  animation-duration: 0.5s;
  animation-name: pulse;
	animation-iteration-count: infinite;
	animation-direction: alternate;

	text-align: center;
	padding: 20vh;
	font-size: 2rem;
`
