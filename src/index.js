import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import AppHeader from './app-header'
import AppHome from './app-home'
import GameHome from './game-home'
import CharacterSheet from './character-sheet'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AppHeader />
      <Switch>
        <Route path="/" exact>
          <AppHome />
        </Route>
        <Route path="/:game" exact>
          <GameHome />
        </Route>
        <Route path="/:game/character">
          <CharacterSheet />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
