import React, {Component, PropTypes } from 'react';
import Recipe from './recipe';
import {Button, Well} from 'react-bootstrap';
import Header from '../Header.jsx';

import { createContainer } from 'meteor/react-meteor-data';
import { UsersWithRecipesCollection } from '../../api/users.js';

"use strict";
class myRecipes extends Component {

    constructor(props) {
        super(props);
        this.state = {
            recipes: [],
            cook: '',
            title: '',
            ingredients: [],
            instructions: '',
            likes: ''
        }
    }


    render() {
        return (

            <div>
              <Header/>
              <br/><br/><br/><br/><br/>
              <Button onClick={this.getRecipesByUsername.bind(this)}> ver mis recetas </Button>
                <div className="recipeList">
                    {this.props.myRecipes[0]?this.props.myRecipes[0].recipes.map(recipe => {
                        return (
                          <div key={recipe.title}>
                            <Recipe recipe={recipe} ingredients={recipe.Ingredients}
                             username={this.props.username} password={this.props.password}
                             title={recipe.title} getRecipes={this.getRecipesByUsername.bind(this)} />
                          </div>
                        );
                    }):''}
                </div>
            </div>

        );
    }
}

myRecipes.propTypes = {
  myRecipes: PropTypes.any.isRequired,
};

export default createContainer(() => {
  return {
    myRecipes: UsersWithRecipesCollection.find({}).fetch(),
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
