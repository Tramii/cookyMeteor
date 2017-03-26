import React, {Component} from 'react';
import Recipe from './recipe';
import {Button, Well} from 'react-bootstrap';
import axios from 'axios';

"use strict";
const ROOT_URL = "https://tramii-cooky-back.herokuapp.com";
class Recipes extends Component {

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
        this.getRecipesByUsername = this.getRecipesByUsername.bind(this);
    }



    getRecipesByUsername() {
        console.log(this.props.username);
        console.log(this.props.password);
        console.log("hace el get");
        axios.post(ROOT_URL + "/recipes/getRecipesByUser", {
            nickName: this.props.username,
            password: this.props.password
        }).then(response => {
          console.log("la response es: "+response);
          console.log(response.data.carpetas[0].recetasDelFolder);
            this.setState({recipes: response.data.carpetas[0].recetasDelFolder})
        })
    }

    render() {
        return (

            <div>
              <div className="row"><Well></Well></div>
              <div className="row"><Well></Well></div>
              <Button onClick={this.getRecipesByUsername.bind(this)}> ver mis recetas </Button>
                <div className="recipeList">
                    {this.state.recipes.map(recipe => {
                        return (
                          <div key={recipe.title}>
                            <Recipe recipe={recipe} ingredients={recipe.Ingredients}
                             username={this.props.username} password={this.props.password}
                             title={recipe.title} getRecipes={this.getRecipesByUsername.bind(this)} />
                          </div>
                        );
                    })}
                </div>
            </div>

        );
    }
}

export default Recipes;
