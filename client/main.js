import React from 'react';
import {meteor} from 'meteor/meteor';
import {render} from 'react-dom';
import './main.html';
import App from '../imports/client/App.js';

import ReactDOM from 'react-dom';
import {
  HashRouter,
  Route,
  Link
} from 'react-router-dom';


import HomePage from '../imports/client/HomePage.jsx';

import Votos from '../imports/client/recipes/Votos.jsx';
import Busqueda from '../imports/client/recipes/Busqueda.jsx';
import Recipes from '../imports/client/recipes/recipes.jsx';
import Add from '../imports/client/recipes/addRecipe.jsx';

import Me from '../imports/client/Me.jsx';

Meteor.startup(()=>{
	ReactDOM.render((
			 <HashRouter>
	     <div>
		     <Route exact path='/' component={App}/>
		     <Route path='/general/Votos' component={Votos}/>
		     <Route path='/general/Busqueda' component={Busqueda}/>
		     <Route path='/misRecetas/adicionar' component={Add}/>
		     <Route path='/misRecetas/ver' component={Recipes}/>
		     <Route path='/miPerfil' component={Me}/>
	 		 </div>
	  	 </HashRouter>
		),document.getElementById('render-target')
	);
});
