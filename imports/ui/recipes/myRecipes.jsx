/* eslint-disable no-global-assign, no-undef, import/extensions,
import/no-extraneous-dependencies, meteor/no-session, react/jsx-no-bind, quotes
no-useless-escape, react/forbid-proptypes, no-unused-vars, no-tabs, quote-props
no-mixed-spaces-and-tabs, jsx-quotes,import/prefer-default-export, react/prop-types */
import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import Header from '../Header.jsx';
import Recipe from './recipe.jsx';

import { createContainer } from 'meteor/react-meteor-data';
import { UsersWithRecipesCollection } from '../../api/users.js';

class myRecipes extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    console.log("entra a destacado");
    return (
      <div className="pad" name="app">
        <Header />
        <div className="col-md-1" />
        <div className="col-md-10">
          <h1 className="head orange bold">
            <i className="fa fa-cutlery" aria-hidden="true" /> Mis recetas
          </h1>
          {console.log(this.props.allRecipes)}
          {this.props.allRecipes.map((recipe) => {
            console.log(recipe);
            return (
              <div key={recipe.title}>
                <Recipe
                  recipe={recipe} ingredients={recipe.Ingredients}
                  username={recipe.username}
                  title={recipe.title} showDelete={true}
                />
              </div>
            );
          })}
        </div>
        <div className="col-md-1" />
      </div>
    );
  }
}
myRecipes.propTypes = {
  allRecipes: PropTypes.any.isRequired,
};

export default createContainer(() => {
  return {
    allRecipes: UsersWithRecipesCollection.find({ username: Meteor.user().username },
    { sort: { likes: -1 } }).fetch(),
  };
}, myRecipes);

/**
{ "_id" : ObjectId("58da047698be6cf20943b1ac"),
 "tipo" : 1, "likes" : 15, "username" : "josega149",
 "title" : "Ramen con mariscos", "description" : "Ramen instantaneo,
  leer instrucciones", "pictureGif" : "p", "Ingredients" :
[{ "ingrediente" : "Ramen" }, { "ingrediente" : "mariscos" }, { "ingrediente" : "agua" } ] }
*/
