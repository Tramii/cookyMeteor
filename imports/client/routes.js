import React from 'react';
import ReactDOM from 'react-dom';
import {browserHistory, Router, Route, IndexRoute} from 'react-router';
import App from './components/App';
import Home from './components/home';
import Leaderboard from './components/leaderboard';
import Leagues from './components/leagues';
import Welcome from './components/welcome';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={HomePage}/>
      <Route path='/general/Votos' component={Leaderboard}/>
      <Route path='/general/Busqueda' component={Home}/>
      <Route path='/misRecetas/adicionar' component={Leagues}/>
      <Route path='/misRecetas/adicionar' component={Leagues}/>
      <Route path='/miPerfil' component={Leagues}/>
      <Route path='/signout' component={Leagues}/>
    </Route>
  </Router>,
  document.querySelector('.container-fluid')
);
