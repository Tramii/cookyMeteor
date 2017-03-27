import React from 'react';
import ReactDOM from 'react-dom';
import {browserHistory, Router, Route, IndexRoute} from 'react-router';
import App from './App';
import HomePage from './HomePage.jsx';
import Votos from './recipes/Votos.jsx';


ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={HomePage}/>
      <Route path='/general/Votos' component={Votos}/>
      <Route path='/general/Busqueda' component={Busqueda}/>
      <Route path='/misRecetas/adicionar' component={Add}/>
      <Route path='/misRecetas/ver' component={Recipes}/>
      <Route path='/miPerfil' component={Me}/>
    </Route>
  </Router>,
  document.querySelector('.container-fluid')
);
