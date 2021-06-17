import React from 'react'
import styled from 'styled-components'

const StatsContainer = styled.div`
	display: flex;
	align-items: center;
`

const CIRCLE_SIZE = '4rem'

const Stat = styled.div`
	text-align: center;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-right: 1.5em;
`

const StatCircle = styled.div`
	width: ${CIRCLE_SIZE};
	height: ${CIRCLE_SIZE};
	border-radius: 50%;
	border-width: 0.15em;
	border-style: solid;
	display: flex;
	justify-content: space-between;
	align-items: stretch;
	overflow: hidden;
`

const StatName = styled.div`

`
const StatNumber = styled.span`
	font-size: 2rem;
	line-height: ${CIRCLE_SIZE};
	flex: 1 1 100%;
`
const StatButton = styled.button`
	background: transparent;
	outline: none;
	border: none;
	opacity: 0.5;
	flex: 0 1 50%;

	&:not(:disabled) {
		cursor: pointer;

		&:hover {
			background: rgba(0, 0, 0, 0.2);
		}
	}
`

const Stats = ({ names, range, defaultValue, isEditing }) => {
	const [stats, setStats] = React.useState({})
	const { min, max } = range || { min: -Infinity, max: Infinity }

	const change = (stat, delta) => {
		setStats({
			...stats,
			[stat]: (stats[stat] || defaultValue) + delta
		})
	}

	return (
		<StatsContainer>
			{names.map(stat => (
				<Stat key={stat}>
					<StatName>{stat}</StatName>
					<StatCircle>
						{isEditing && (
							<StatButton
								disabled={stats[stat] <= min}
								onClick={() => change(stat, -1)}
							>
								-
							</StatButton>
						)}
						<StatNumber>{stats[stat] || defaultValue}</StatNumber>
						{isEditing && (
							<StatButton
								disabled={stats[stat] >= max}
								onClick={() => change(stat, 1)}
							>
								+
							</StatButton>
						)}
					</StatCircle>
				</Stat>
			))}
		</StatsContainer>
	)
}

export default Stats