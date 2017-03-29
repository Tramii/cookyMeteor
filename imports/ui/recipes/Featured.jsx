import React, {Component, PropTypes} from 'react';
import {render} from 'react-dom';
import Header from '../Header.jsx';
import Recipe from './recipe.jsx';

import { createContainer } from 'meteor/react-meteor-data';
import { UsersWithRecipesCollection } from '../../api/users.js';

class Featured extends Component {
	constructor(props){
		super(props);
		this.state = {
		}
	}

	render()
	{
		console.log("entra a destacado");
		return(
			/*General styling*/
			<div name="app">
				<Header/>
				{console.log(this.props.allRecipes)}
				{this.props.allRecipes.map((recipe) => {
					console.log(recipe);
						return (
							<div key={recipe.title}>
								<Recipe recipe={recipe} ingredients={recipe.Ingredients}
								 username={recipe.username}
								 title={recipe.title} showDelete={false}/>
							</div>
						);

				})}
			</div>
		);
	}
}
Featured.propTypes = {
  allRecipes: PropTypes.any.isRequired,
};

export default createContainer(() => {
  return {
    allRecipes: UsersWithRecipesCollection.find({}, { sort: { likes: -1 } }).fetch()
  };
}, Featured);
