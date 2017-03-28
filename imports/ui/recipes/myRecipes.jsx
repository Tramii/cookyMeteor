import React, {Component} from 'react';
import Recipe from './recipe';
import {Button, Well} from 'react-bootstrap';
import Header from '../Header.jsx';
import axios from 'axios';

"use strict";
const ROOT_URL = "https://tramii-cooky-back.herokuapp.com";
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
        this.getRecipesByUsername = this.getRecipesByUsername.bind(this);
    }



    getRecipesByUsername() {
        console.log("hace el get");
        axios.post(ROOT_URL + "/recipes/getRecipesByUser", {
          nickName: 'Josega149',
          password: 'password'

        }).then(response => {
          console.log("la response es: "+response);
          console.log(response.data.carpetas[0].recetasDelFolder);
            this.setState({recipes: response.data.carpetas[0].recetasDelFolder})
        })
    }

    render() {
        return (

            <div>
              <Header/>
              <br/><br/><br/><br/><br/>
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

export default myRecipes;
