import React from 'react';
import ReactDOM from 'react-dom';
import './font-styles.css';
import reportWebVitals from './reportWebVitals';
import { HashRouter as Router } from 'react-router-dom'
import { GlobalStyles, AppContainer } from './global-styles'
import Routes from './app/routes'

import AppHeader from './app/header'
import AppFooter from './app/footer'

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles>
      <Router>
        <AppHeader />
        <AppContainer>
          <Routes />
        </AppContainer>
        <AppFooter />
      </Router>
    </GlobalStyles>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
