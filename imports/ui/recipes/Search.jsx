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
						titulo: 'Titulo que quieres buscar',
						type: [],
						ingredients: [],
						modoForm:true,
						searchResult:[],
				}
	}
	buscar(){
		var query ='';
		var modifico=false;
		if(this.state.titulo !== '')
		{
			query+="title:"+this.state.titulo;
			modifico = true;
		}
		if(this.state.type.length !==0)
		{
			if(modifico)
			{
				query+=",tipo: { $in:" +this.state.type+ "}";
			}
			else {
				query+="tipo: { $in:" +this.state.type+ "}";
			}
			modifico=true;
		}
		if(this.state.ingredients.length !==0)
		{
			if(modifico)
			{
				query+='"Ingredients": { $elemMatch:{ ingrediente:' +this.state.ingredients+ '}}';
				modifico=false;
			}
			else {
				query+='"Ingredients": { $elemMatch:{ "ingrediente":"' +this.state.ingredients+ '"}}';
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
		this.setState({modoForm:true,ingredients:[],type:[],titulo:'Titulo que quieres buscar',searchResult:[]});
	}

	/*Adds ingredient to ingredient list*/
	addIngredient(ing) {
			var i = 0;
			var n = this.state.ingredients.length;
			var rep = false;
			while (i<n && !rep) {
					if (ing === this.state.ingredients[i]){
							rep = true;
							console.log('Ingrediente repetido');
							window.alert('Ingrediente repetido');
					}
					i++;
			}
			if (!rep) {
					this.setState({
							ingredients: this.state.ingredients.concat(ing)
					}, () => {
							console.log(this.state.ingredients);
					});
			}
	}

	/*Searches and deletes ingredient*/
	deleteIngredient(ing) {
			console.log('quiero borrar: ' + ing);
			var found = false;
			var i = 0;
			while (!found) {
					console.log('busca ' + i);
					if (ing === this.state.ingredients[i]) {
							var temp = this.state.ingredients;
							found = true;
							temp.splice(i, 1);
							this.setState({ingredients: temp});
					}
					i++;
			}
	}

	/*Sets recipe's title*/
	handleTitle(event){
		this.setState({titulo: event.target.value});
		console.log(this.state.titulo);
	}

	/*Sets types: 1 is breakfast, 2 is lunch or dinner, 3 is dessert*/
	addType(chbx){
		console.log(chbx.checked);
		if(chbx.checked){
			console.log(chbx.name);
			this.setState({
				type: this.state.type.concat(chbx.name)
			});
		}else{
			var i = 0;
			var found = false;
			while (!found){
				if (this.state.type[i] === chbx.name){
					console.log('Found it!');
					found = true;
					temp = this.state.type;
					temp.splice(i,1);
					this.setState({
						type: temp
					});
				}
				i++;
			}
		}
	}

	render()
	{
		var form = (
					<div><div>
						<h2>Llena los campos por los cuales deseas filtrar</h2>
					</div>
					<RecipeForm
						title={this.state.title}
						setTitle={this.handleTitle.bind(this)}
						ingredients={this.state.ingredients}
						addIngredient={this.addIngredient.bind(this)}
						deleteIngredient={this.deleteIngredient.bind(this)}
						addType={this.addType.bind(this)}
					/>
					<div className="row buscar">
						<Button bsStyle="info" onClick={() => {this.buscar()}}>
						Buscar</Button>
					</div></div>);
		var busquedaCompleta=(
			<div className="buscar">
				<h2 onClick={()=>{this.paginaBusqueda()}}>Volver a realizar Busqueda </h2>
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
