import React from 'react'

const StatsBlock = ({ names, range }) => {
	const [stats, setStats] = React.useState({})
	const [min, max] = range || [-Infinity, Infinity]

	const change = (stat, delta) => {
		setStats({
			...stats,
			[stat]: (stats[stat] || 0) + delta
		})
	}

	return names.map(stat => (
		<div>
			<div>{stat}</div>
			<div>
				<button
					disabled={stats[stat] <= min}
					onClick={() => change(stat, -1)}
				>
					-
				</button>
				<span>{stats[stat] || 0}</span>
				<button
					disabled={stats[stat] >= max}
					onClick={() => change(stat, 1)}
				>
					+
				</button>
			</div>
		</div>
	))
}

export default StatsBlock