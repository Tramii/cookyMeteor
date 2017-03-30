import React, {Component} from 'react';
import {render} from 'react-dom';

import {Table, Button, Well} from 'react-bootstrap';

import Header from '../Header.jsx';
import RecipeForm from './recipeForm.jsx';
import { UsersWithRecipesCollection } from '../../api/users.js';

export default class Search extends Component {
	constructor(props) {
				super(props);
				this.state = {
						titulo: '',
						tipo: [],
						ingredientes: [],
						modoForm:true,
						searchResult:[],
				}
	}
	buscar(){
		if(titulo !== '')//y el resto de comparaciones

		var searchInDB = UsersWithRecipesCollection.find({}, { sort: { likes: -1 } }).fetch();


		this.setState({modoForm:false, searchResult:searchInDB});
	}
	render()
	{
		var form = (
					<div><div>
						<h2>Llena los campos por los cuales deseas filtrar</h2>
					</div>
					<RecipeForm/>
					<div className="row buscar">
						<Button bsStyle="info" onClick={() => {this.buscar()}}>
						Buscar</Button>
					</div></div>);

		return(
			<div name="app">
				<Header/>
				{this.state.modoForm? form:
					//aqui debo agregar para volver a buscar normal
					this.state.searchResult.map((recipe) => {
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
