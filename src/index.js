import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import GlobalStyles from './global-styles'

import AppHeader from './app-header'
import AppHome from './app-home'
import CreateCharacter from './character/create'
import CharacterSheet from './character/sheet'

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles>
      <Router>
        <AppHeader />
        <Switch>
          <Route path="/" exact component={AppHome} />
          <Route path="/:gameId/new" exact component={CreateCharacter} />
          <Route path="/:gameId/:characterId" component={CharacterSheet} />
        </Switch>
      </Router>
    </GlobalStyles>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
