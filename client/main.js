/* eslint-disable no-global-assign, no-undef, import/extensions,
import/no-extraneous-dependencies, meteor/no-session, react/jsx-no-bind,
no-useless-escape, react/forbid-proptypes, no-unused-vars, no-tabs,
no-mixed-spaces-and-tabs, jsx-quotes */
import React from 'react';
import { meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import './main.html';
import App from '../imports/ui/App.jsx';

import ReactDOM from 'react-dom';
import { HashRouter, Route, Link } from 'react-router-dom';


import HomePage from '../imports/ui/HomePage.jsx';

import Featured from '../imports/ui/recipes/Featured.jsx';
import Search from '../imports/ui/recipes/Search.jsx';
import myRecipes from '../imports/ui/recipes/myRecipes.jsx';
import Add from '../imports/ui/recipes/addRecipe.jsx';
import LoginPage from '../imports/ui/auth/LoginPage.jsx';
import SignupPage from '../imports/ui/auth/SignupPage.jsx';
import Me from '../imports/ui/Me.jsx';

Meteor.startup(() => {
  ReactDOM.render((
    <HashRouter>
      <div>
        <Route exact path='/' component={App} />
        <Route path='/general/featured' component={Featured} />
        <Route path='/general/search' component={Search} />
        <Route path='/misRecetas/adicionar' component={Add} />
        <Route path='/misRecetas/ver' component={myRecipes} />
        <Route path='/miPerfil' component={Me} />
        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={SignupPage} />
      </div>
    </HashRouter>
		), document.getElementById('render-target'),
	);
});
