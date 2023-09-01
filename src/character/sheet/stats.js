import React from 'react'
import styled from 'styled-components'

import { ROLL_STATUS } from './rolls'
import { getGlobalTheme } from '../../global-styles'

const StatsContainer = styled.div`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	margin: 2rem 0;
`

const getSize = (smallSize, largeSize) => ({ isLarge }) => isLarge ? largeSize : smallSize

const Stat = styled.div`
	text-align: center;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-left: 1.5em;
	margin-right: 1.5em;
	margin-bottom: 0.75em;
`

const StatCircle = styled.div`
	width: ${getSize('4rem', '6rem')};
	height: ${getSize('4rem', '6rem')};
	line-height: ${getSize('4rem', '6rem')};
	font-size: ${getSize('2rem', '3rem')};
	border-radius: 50%;
	border-width: 0.075em;
	border-style: solid;
	display: flex;
	justify-content: space-between;
	align-items: stretch;
	overflow: hidden;


`

const StatName = styled.div`
	font-weight: bold;
	margin-bottom: 0.25em;
`
const StatNumber = styled.span`
	font-size: inherit;
	line-height: inherit;
	flex: 1 1 100%;
	font-weight: bold;
`
const StatButton = styled.button`
	background: transparent;
	outline: none;
	border: none;
	opacity: 0.5;
	flex: 0 1 50%;
	color: ${getGlobalTheme().fontColor};

	&:disabled {
		opacity: 0;
	}

	&:not(:disabled) {
		cursor: pointer;

		&:hover {
			background-color: ${getGlobalTheme().fontColor};
			color: ${getGlobalTheme().backgroundColor};
		}
	}
`
const RollButtonsContainer = styled.div`
`

const LESS_THAN = '<'
const LESS_THAN_OR_EQ = '<='
const GREATER_THAN = '>'
const GREATER_THAN_OR_EQ = '<='

const POOL_COUNT = 'count'
const POOL_COLLAPSE = 'collapse'
const SUM_MODIFIER = 'sum-mod'

const roll1d6 = () => Math.ceil(Math.random() * 6)
const rollXd6 = numDice => Array(numDice).fill(0).map(roll1d6)

const createRoller = ({ type, stat, diceCount, addRoll }) => {
	if (type === POOL_COUNT) {
		return () => {
			const dice = rollXd6(diceCount)
			addRoll({ 
				resultValue: dice.length, // TODO
				resultStatus: ROLL_STATUS.CRIT, // TODO
				dice,
				note: type,
			})
		}
	}
	if (type === SUM_MODIFIER) {
		return () => {
			const dice = rollXd6(diceCount)
			const result = dice.reduce((sum, roll) => sum + roll, 0) + stat
			addRoll({
				resultValue: result,
				resultStatus: ROLL_STATUS.CRIT, // TODO
				dice,
				modifier: stat,
				note: type,
			})
		}
	}
	if (type === POOL_COLLAPSE) {
		return () => {
			const dice = rollXd6(stat)
			const result = dice.reduce((max, die) => Math.max(max, die), 0)
			addRoll({ 
				resultValue: result,
				resultStatus: ROLL_STATUS.CRIT, // TODO
				dice,
				note: type,
			})
		}
	}
}

const createDefaultStats = ({ names, defaultValue }) => names.reduce((stats, statName) => {
	stats[statName] = defaultValue
	return stats
}, {})

const Stats = ({ 
	names, 
	range, 
	defaultValue, 
	isEditing, 
	addRoll,
	rollOptions: {
		type: rollType,
		diceCount,
	}, 
	rollButtons,
	clickStatToRoll, 
}) => {
	const [stats, setStats] = React.useState(() => createDefaultStats({ names, defaultValue }))
	const [statRollers, setStatRollers] = React.useState()
	const [specialRollers, setSpecialRollers] = React.useState()
	const { min, max } = range || { min: -Infinity, max: Infinity }

	const change = (stat, delta) => {
		// TODO: have this actually save in store
		setStats({
			...stats,
			[stat]: (stats[stat] || defaultValue) + delta
		})
	}

	React.useEffect(() => {
		if (clickStatToRoll) {
			setStatRollers(
				names.reduce((rollers, stat) => {
					if (stats[stat] !== undefined) { // stats can be 0
						rollers[stat] = createRoller({
							type: rollType,
							stat: stats[stat],
							diceCount,
							addRoll,
						})	
					}
					return rollers
				}, {})
			)
		}
		if (rollButtons) {
			setSpecialRollers(
				rollButtons.map(({ name, alternates, ...rollConfig }) => {
					const roller = createRoller({ 
						addRoll,
						type: rollType,
						...rollConfig,
					})
					if (alternates) {
						roller.alternates = alternates.map(alternate => createRoller({
							addRoll,
							type: rollType,
							...alternate,
						}))
					}
					return roller
				})
			)
		}
	}, [stats, addRoll, clickStatToRoll, rollButtons, diceCount, names, rollType])

	return (
		<StatsContainer>
			{names.map(stat => (
				<Stat key={stat}>
					<StatName>{stat}</StatName>
					<StatCircle 
						isLarge={!stat}
						onClick={!isEditing && clickStatToRoll && statRollers && statRollers[stat]}
						isRollable={!isEditing && clickStatToRoll} 
					>
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
			{rollButtons && (
				<RollButtonsContainer>
					asd
				</RollButtonsContainer>
			)}
		</StatsContainer>
	)
}

export default Stats