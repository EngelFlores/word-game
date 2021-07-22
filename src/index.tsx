import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Game from './components/Game';
import Home from './scene/Main'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

const routes = () => (
  <Switch>
    <Route path="/game" component={Game} />
    <Route path="/home" component={Home} />
    <Redirect exact from="/" to="home" />
  </Switch>
);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>{routes()}</BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
