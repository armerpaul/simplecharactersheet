import React from 'react'
import {
  Switch,
  Route
} from 'react-router-dom'
import AppHome from './home'
import CreateCharacter from '../character/create'
import CharacterSheet from '../character/sheet'

const AppRouter = () => (
	<Switch>
		<Route path="/" exact component={AppHome} />
		<Route path="/:gameId/new" exact component={CreateCharacter} />
		<Route path="/:gameId/:characterId" component={CharacterSheet} />
	</Switch>
)

export default AppRouter