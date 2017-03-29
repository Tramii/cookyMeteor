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

    deleteRecipe(){
      Meteor.call('recipes.remove', this.props.recipe._id);
    }

     like(){
      Meteor.call('recipesLike.update', this.props.recipe._id);
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
                                <td><Button bsStyle="info" onClick={() => {this.like()}}>Likes</Button></td>
                                <td>{this.props.recipe.likes}</td>
                            </tr>
                            <tr>
                              {this.props.showDelete?<td className="deleteRecipe" colSpan="2">
                                <Button bsStyle="danger" onClick={() => {this.deleteRecipe()}}>
                                  Delete</Button></td>:''}
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
