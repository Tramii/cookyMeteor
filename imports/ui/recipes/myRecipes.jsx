import React, {Component, PropTypes} from 'react';
import {render} from 'react-dom';
import Header from '../Header.jsx';
import Recipe from './recipe.jsx';

import { createContainer } from 'meteor/react-meteor-data';
import { UsersWithRecipesCollection } from '../../api/users.js';

class myRecipes extends Component {
	constructor(props){
		super(props);
		this.state = {
		}
	}

	render()
	{
		console.log("entra a destacado");
		return(
			<div name="app">
				<Header/>
				{console.log(this.props.allRecipes)}
				{this.props.allRecipes.map((recipe) => {
					console.log(recipe);
						return (
							<div key={recipe.title}>
								<Recipe recipe={recipe} ingredients={recipe.Ingredients}
								 username={recipe.username}
								 title={recipe.title} showDelete={true}/>
							</div>
						);

				})}
			</div>
		);
	}
}
myRecipes.propTypes = {
  allRecipes: PropTypes.any.isRequired,
};

export default createContainer(() => {
  return {
    allRecipes: UsersWithRecipesCollection.find({username: Meteor.user().username}, { sort: { likes: -1 } }).fetch()
  };
}, myRecipes);

/**
{ "_id" : ObjectId("58da047698be6cf20943b1ac"), "tipo" : 1, "likes" : 15, "username" : "josega149", "title" : "Ramen con mariscos", "description" : "Ramen instantaneo, leer instrucciones", "pictureGif" : "p", "Ingredients" : [ { "ingrediente" : "Ramen" }, { "ingrediente" : "mariscos" }, { "ingrediente" : "agua" } ] }
{ "_id" : ObjectId("58d9f98f98be6cf20943b1aa"), "tipo" : 1, "likes" : 6, "username" : "josega149", "title" : "Jugo de mora de la abuela", "description" : "Se hace jugo de mora con el agua y la mora y el azucar.", "pictureGif" : "p", "Ingredients" : [ { "ingrediente" : "mora" }, { "ingrediente" : "azucar" }, { "ingrediente" : "agua" } ] }
{ "_id" : ObjectId("58da0bee98be6cf20943b1ad"), "tipo" : 1, "likes" : 3, "username" : "margari", "title" : "Pasta pesto", "description" : "Coger la pasta y ponerla al agua y hacer la pasta", "pictureGif" : "p", "Ingredients" : [ { "ingrediente" : "Pasta" }, { "ingrediente" : "Pesto" } ] }
*/
