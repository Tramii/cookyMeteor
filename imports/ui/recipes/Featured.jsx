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

class Featured extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="pad hello" name="app">
        <Header />
        <div className="col-md-1" />
        <div className="col-md-10">
          <h1 className="head orange bold">
            <i className="fa fa-star" aria-hidden="true" /> Recetas destacadas
          </h1>
          {this.props.allRecipes.map((recipe) => {
            console.log(recipe);
            return (
              <div key={recipe.title}>
                <Recipe
                  recipe={recipe}
                  ingredients={recipe.Ingredients}
                  username={recipe.username}
                  title={recipe.title}
                  showDelete={false}
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
Featured.propTypes = {
  allRecipes: PropTypes.any.isRequired,
};

export default createContainer(() => {
  return {
    allRecipes: UsersWithRecipesCollection.find({}, { sort: { likes: -1 } }).fetch(),
  };
}, Featured);
