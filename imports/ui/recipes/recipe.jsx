import React, {Component, PropTypes} from 'react';
import {Table, Button, Well} from 'react-bootstrap';
import Ingredient from './ingredient';

import { createContainer } from 'meteor/react-meteor-data';
import { UsersWithRecipesCollection } from '../../api/users.js';

class Recipe extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    deleteRecipe(titleR){
//Deberían usar meteor para el manejo de collections
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

     like(title){
          UsersWithRecipesCollection.update(
          {titulo: this.props.recipe.title},
          {$inc: 'likes'},
                   {multi: false}
        );
     }
    render() {
        return (
            <div className="row">
              <div className="col-md-2"></div>
              <div className="col-md-8">
                <Well>
                    <Table condensed hover>
                        <tbody>
                            <tr>
                                <td>Cook</td>
                                <td>{this.props.recipe.username}</td>
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
                                <td><Button bsStyle="info" onClick={() => {this.like(this.props.title)}}>Likes</Button></td>
                                <td>{this.props.recipe.likes}</td>
                            </tr>
                            <tr>
                              {this.props.showDelete?<td  className="deleteRecipe" colSpan="2"><Button onClick={() => {this.deleteRecipe(this.props.title)}}
                                 bsStyle="danger">Delete</Button></td>:''}
                            </tr>
                        </tbody>
                    </Table>

                </Well>
              </div>
              <div className="col-md-2"></div>
            </div>
        );
    }
}

export default Recipe;
