import React from 'react';
import {meteor} from 'meteor/meteor';
import {render} from 'react-dom';
import './main.html';
import App from '../imports/ui/App.jsx';

import ReactDOM from 'react-dom';
import { HashRouter, Route, Link } from 'react-router-dom';


import HomePage from '../imports/ui/HomePage.jsx';

import Featured from '../imports/ui/recipes/Featured.jsx';
import Search from '../imports/ui/recipes/Search.jsx';
import myRecipes from '../imports/ui/recipes/myRecipes.jsx';
import Add from '../imports/ui/recipes/addRecipe.jsx';

import Me from '../imports/ui/Me.jsx';
import '../imports/startup/accounts-config.js';

//<!-- Esta organizada, es muy facil entender como esta distribuida. Mi recomendacion es depronto agregar ya recetas en la parte principal, depronto consejos nutricionales. Esta Api te puede dar receta y parte de informacion nutricional https://developer.edamam.com/es/api-recetas-edamam-documentacion -->
// tambien agregar como iconos para los ingredientes, depronto puede ser intereante el fitro mas visual
Meteor.startup(()=>{
	ReactDOM.render((
			 <HashRouter>
	     <div>
		     <Route exact path='/' component={App}/>
		     <Route path='/general/featured' component={Featured}/>
		     <Route path='/general/search' component={Search}/>
		     <Route path='/misRecetas/adicionar' component={Add}/>
		     <Route path='/misRecetas/ver' component={myRecipes}/>
		     <Route path='/miPerfil' component={Me}/>
	 		 </div>
	  	 </HashRouter>
		),document.getElementById('render-target')
	);
});
