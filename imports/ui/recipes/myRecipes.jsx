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

{
	"tipo":1,
	"likes":0,
	"username":"josega149",
	"title":"Jugo de mora de la abuela",
	"description":"Se hace jugo de mora con el agua y la mora y el azucar.",
	"pictureGif":"p",
  "Ingredients":[
	    {"ingrediente":"mora"},
			{"ingrediente":"azucar"},
			{"ingrediente":"agua"}
	]
}


*/
