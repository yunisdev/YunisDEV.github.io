import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import App from './App'
import { Reset } from 'styled-reset'
import './global.scss'
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'core-js/fn/number/is-nan'; import 'core-js/es7/'; import 'core-js/es6/'; import 'raf/polyfill';
// eslint-disable-next-line no-unused-vars
import firebase from './utils/firebase'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import AdminApp from './admin/AdminApp'

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <Reset />
    <Switch>
      <Route exact path="/">
        <App />
      </Route>
      <Route path="/admin">
        <AdminApp />
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
