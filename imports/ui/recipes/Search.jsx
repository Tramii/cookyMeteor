
/* eslint-disable no-global-assign, no-undef, import/extensions,
import/no-extraneous-dependencies, meteor/no-session, react/jsx-no-bind, quotes
no-useless-escape, react/forbid-proptypes, no-unused-vars, no-tabs, quote-props
no-mixed-spaces-and-tabs, jsx-quotes,import/prefer-default-export, react/prop-types */
import React, { Component } from 'react';
import { render } from 'react-dom';
import { Button } from 'react-bootstrap';
import Header from '../Header.jsx';
import RecipeForm from './recipeForm.jsx';
import Recipe from './recipe.jsx';
import { UsersWithRecipesCollection } from '../../api/users.js';

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titulo: '',
      type: [],
      ingredients: [],
      modoForm: true,
      searchResult: [],
    };
  }
  buscar() {
    const query = {};
    if (this.state.titulo !== '') {
      query.title = this.state.titulo;
    }
    if (this.state.type.length !== 0) {
      query.tipos = {};
      query.tipos.$elemMatch = {};
      query.tipos.$elemMatch.$or = [];
      for (let i = 0; i < this.state.type.length; i++) {
        query.tipos.$elemMatch.$or.push({
          tipo: this.state.type[i] + '',
        });
                /**
        tipos:[{tipo:1}]
        */
      }
    }
    if (this.state.ingredients.length !== 0) {
      query.Ingredients = {};
      query.Ingredients.$elemMatch = {};
      query.Ingredients.$elemMatch.$or = [];
      for (let j = 0; j < this.state.ingredients.length; j++) {
        query.Ingredients.$elemMatch.$or.push({ ingrediente: this.state.ingredients[j] });
      }
    }
    console.log('query');
    console.log(query);
    const searchInDB = query === ''
            ? UsersWithRecipesCollection.find({}).fetch()
            : UsersWithRecipesCollection.find(query, {
              sort: {
                likes: -1,
              },
            }).fetch();
    console.log('Resultado');
    console.log(searchInDB);
    this.setState({ modoForm: false, searchResult: searchInDB });
  }
  paginaBusqueda() {
    this.setState({ modoForm: true, ingredients: [], type: [], titulo: '', searchResult: [] });
  }

    /* Adds ingredient to ingredient list*/
  addIngredient(ing) {
    if (!ing.includes('<')) {
      let i = 0;
      const n = this.state.ingredients.length;
      let rep = false;
      while (i < n && !rep) {
        if (ing === this.state.ingredients[i]) {
          rep = true;
          console.log('Ingrediente repetido');
          window.alert('Ingrediente repetido');
        }
        i++;
      }
      if (!rep) {
        this.setState({
          ingredients: this.state.ingredients.concat(ing),
        }, () => {
          console.log(this.state.ingredients);
        });
      }
    }
  }

  /* Searches and deletes ingredient*/
  deleteIngredient(ing) {
    console.log('quiero borrar: ' + ing);
    let found = false;
    let i = 0;
    while (!found) {
      console.log('busca ' + i);
      if (ing === this.state.ingredients[i]) {
        const temp = this.state.ingredients;
        found = true;
        temp.splice(i, 1);
        this.setState({ ingredients: temp });
      }
      i++;
    }
  }

  /* Sets recipe's title*/
  handleTitle(event) {
    if (!event.target.value.includes('<')) {
      this.setState({ titulo: event.target.value });
    }
  }

  /* Sets types: 1 is breakfast, 2 is lunch or dinner, 3 is dessert*/
  addType(chbx) {
    console.log(chbx.checked);
    if (chbx.checked) {
      console.log(chbx.name);
      this.setState({
        type: this.state.type.concat(chbx.name),
      }, () => {
        console.log(this.state.type);
      });
    } else {
      let i = 0;
      let found = false;
      while (!found) {
        if (this.state.type[i] === chbx.name) {
          console.log('Found it!');
          found = true;
          const temp = this.state.type;
          temp.splice(i, 1);
          this.setState({
            type: temp,
          }, () => {
            console.log(this.state.type);
          });
        }
        i++;
      }
    }
  }

  render() {
    const form = (
      <div>
        <h1 className="head orange bold">
          <i className="fa fa-search" aria-hidden="true" />
            Búsqueda de recetas
        </h1>
        <p className="bod">
            Llena los campos por los cuales deseas filtrar tu búsqueda.
        </p>
        <RecipeForm
          title={this.state.titulo}
          setTitle={this.handleTitle.bind(this)}
          ingredients={this.state.ingredients}
          addIngredient={this.addIngredient.bind(this)}
          deleteIngredient={this.deleteIngredient.bind(this)}
          addType={this.addType.bind(this)}
        />
        <div className="row buscar">
          <Button
            bsSize="large" onClick={() => {
              this.buscar();
            }}
          >
            <i className="fa fa-search" aria-hidden="true" />
            <strong>
                Buscar</strong>
          </Button>
        </div>
      </div>
    );
    const busquedaCompleta = (
      <div className="buscar">
        <h2
          className="bold head orange" onClick={() => {
            this.paginaBusqueda();
          }}
        >
          <i className="fa fa-repeat" aria-hidden="true" />
              Realizar otra búsqueda
          </h2><br /> {this.state.searchResult.map((recipe) => {
            console.log(recipe);
            return (
              <div key={recipe.title}>
                <Recipe
                  recipe={recipe}
                  ingredients={recipe.Ingredients}
                  username={recipe.username} title={recipe.title} showDelete={false}
                />
              </div>
            );
          })}
      </div>
    );
    return (
      <div className="pad row" name="app">
        <Header /> {this.state.modoForm
              ? <div>
                <div className="col-md-3" />
                <div className="col-md-6">
                  {form}
                </div>
                <div className="col-md-3" />
              </div>
          : <div>
            <div className="col-md-1" />
            <div className="col-md-10">
              {busquedaCompleta}
            </div>
            <div className="col-md-1" />
          </div>
    }
      </div>
    );
  }
}
