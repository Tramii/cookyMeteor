import React, { Component, PropTypes  } from 'react';
import Header from './Header.jsx';
import { UsersWithRecipesCollection } from '../api/users.js';
import { render } from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';

 class Me extends Component {
  render() {
    var points =0;
    this.props.allRecipes.map((recipe) => {
      console.log(recipe);
      points += parseInt(recipe.likes);
    })
    return (
      <div className="pad" name="app">
        <Header/>
        <div className="container">
          <h1 className="head orange bold">@{Meteor.user().username}</h1>
          <hr />
          <div className="row">
            <div className="col-md-3">
              <div className="text-center">
                <img src="https://conferencecloud-assets.s3.amazonaws.com/default_avatar.png" className="avatar img-circle" alt="avatar" />
              </div>

            </div>

            <div className="col-md-9 personal-info bod">
              <div className="puntosCook">
                <h3>Puntos cook:  {points}</h3>
              </div>

              <h3>Recomendaciones</h3>

            </div>
          </div>
        </div>
      </div>
    );
  }
}
Me.propTypes = {
  allRecipes: PropTypes.any.isRequired,
};

export default createContainer(() => {
  return {
    allRecipes: UsersWithRecipesCollection.find({username: Meteor.user().username} ).fetch()
  };
}, Me);
