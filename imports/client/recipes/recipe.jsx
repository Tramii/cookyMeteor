import React, {Component} from 'react';
import axios from 'axios';
import {Table, Button, Well} from 'react-bootstrap';
import Ingredient from './ingredient';

const ROOT_URL = "https://tramii-cooky-back.herokuapp.com";

class Recipe extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    deleteRecipe(titleR){

          console.log("nickName: "+this.props.username);
            axios.post(ROOT_URL+"/recipes/deleteRecipe",{
              nickName: this.props.username,
              password: this.props.password,
              title: titleR
            }
          ).then(response => {
            console.log("BORROOOO"+response),
            this.props.getRecipes()
          })
        }


    render() {
        return (
            <div>
                <Well>
                    <Table condensed hover>
                        <tbody>
                            <tr>
                                <td>Cook</td>
                                <td>{this.props.recipe.creadaPor}</td>
                            </tr>
                            <tr>
                                <td>Title</td>
                                <td>{this.props.recipe.title}</td>
                            </tr>
                            <tr>
                                <td>Ingredients</td>
                                <td>{this.props.ingredients.map(ingredient =>{
                                  return(
                                    <ul key={ingredient.ingrediente}>
                                        <Ingredient name={ingredient.ingrediente}/>
                                    </ul>
                                  );
                                })}</td>
                            </tr>
                            <tr>
                                <td>Instructions</td>
                                <td>{this.props.recipe.description}</td>
                            </tr>
                            <tr>
                                <td>Likes</td>
                                <td>{this.props.recipe.likes}</td>
                            </tr>
                            <tr>
                              <td colSpan="2"><Button onClick={() => {this.deleteRecipe(this.props.title)}}  bsStyle="danger">Delete</Button></td>
                            </tr>
                        </tbody>
                    </Table>

                </Well>
            </div>
        );
    }
}

export default Recipe;
