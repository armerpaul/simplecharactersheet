import styled from 'styled-components'

export const LoadingContainer = styled.div`
	@keyframes pulse {
		from { opacity: 0.5 }
		to { opacity: 1 }
	}

  animation-duration: 0.5s;
  animation-name: pulse;
	animation-iteration-count: infinite;
	animation-direction: alternate;

	text-align: center;
	padding: 20vh 0;
	font-size: 2rem;
	width: 100%;
`

export const CharacterContainer = styled.div`

`