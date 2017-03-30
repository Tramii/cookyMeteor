import React, {Component} from 'react';
import {render} from 'react-dom';

import {Table, Button, Well} from 'react-bootstrap';

import Header from '../Header.jsx';
import RecipeForm from './recipeForm.jsx';
import Recipe from './recipe.jsx';
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
		var query ='';
		var modifico=false;
		if(this.state.titulo !== '')
		{
			query+="titulo:"+this.state.titulo;
			modifico = true;
		}
		if(this.state.tipo.length !==0)
		{
			if(modifico)
			{
				query+=",tipo: { $all:" +this.state.tipo+ "}";
			}
			else {
				query+="tipo: { $all:" +this.state.tipo+ "}";
			}
			modifico=true;
		}
		if(this.state.ingredientes.length !==0)
		{
			if(modifico)
			{
				query+=",Ingredients: { $all:" +this.state.ingredientes+ "}";
				modifico=false;
			}
			else {
				query+="Ingredients: { $all:" +this.state.ingredientes+ "}";
			}
		}
		console.log('query');
		console.log(query);
		var searchInDB = query===''?UsersWithRecipesCollection.find({}, { sort: { likes: -1 } }).fetch():UsersWithRecipesCollection.find({query}, { sort: { likes: -1 } }).fetch();
		console.log('Resultado');
		console.log(searchInDB);
		this.setState({modoForm:false, searchResult:searchInDB});
	}
	paginaBusqueda(){
		this.setState({modoForm:true,ingredientes:[],tipo:[],titulo:''});
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
		var busquedaCompleta=(
			<div className="buscar">
				<h2 onClick={()=>{this.paginaBusqueda()}}>Volver a realizar Busqueda </h2>
				{console.log(this.state.searchResult)}
				{this.state.searchResult.map((recipe,i) => {
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

		return(
			<div name="app">
				<Header/>
				<br/>
				{this.state.modoForm? form:busquedaCompleta}
			</div>
		);
	}
}
