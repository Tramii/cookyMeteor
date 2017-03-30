import React, { Component, PropTypes } from 'react';
import {Button, Well, Table, FormGroup, ControlLabel, FormControl, Checkbox} from 'react-bootstrap';
import Header from '../Header.jsx';
import RecipeForm from './recipeForm.jsx';
import { createContainer } from 'meteor/react-meteor-data';
import { UsersWithRecipesCollection } from '../../api/users.js';

class AddRecipe extends Component{

  constructor(props){
    super(props);
    this.state = {
      title: '',
      type:[ ],
      description:'',
      ingredients:[ ],
      pictureGif:''
    }
  }

  /*Adds ingredient to ingredient list*/
  addIngredient(event){
    this.setState({
      ingredients : this.state.ingredients.concat(event)
    }, ()=>{
       console.log(this.state.ingredients);
    });
  }

  deleteIngredient(ing){
    console.log('salee');
    var found = false;
    var i = 0;
    while (!found){
      console.log('busca '+i);
      if (ing === this.state.ingredients[i]){
        var temp = this.state.ingredients;
        found=true;
        temp.splice(i,1);
        this.setState({
          ingredients: temp
        },()=>{
          
        });
      }
    }
  }

  /*Sets recipe's instructions*/
  handleInstructions(event)  {
    this.setState({
      description: event.target.value
    });
  }

  /*Sets recipe's title*/
  handleTitle(event){
    this.setState({
      title: event.target.value
    }, ()=>{
      console.log(this.state.title);
    });
  }

  handlePicture(event){
    this.setState({
      pictureGif: event.target.value
    })
  }

  /*Post recipe to MongoDB*/
  saveRecipe(){
    if(this.state.title!=='' && this.state.description!=='' && this.state.ingredients!==[] )
    {
      console.log("esta haciendo el post recipe "+this.state.title+ "  "+this.state.description+"  "+ this.state.ingredients);
      var recipe = {
        "tipo": [1],
        "likes": 0,
        "username": Meteor.user().username,
        "title": this.state.title,
        "description": this.state.description,
        "pictureGif": this.state.pictureGif,
        "Ingredients": this.state.ingredients
      };

      Meteor.call('recipes.insert', recipe);
    }
    else {
      alert('Some required fields are missing');
    }
  }

  render(){

    return (
      <div>
        <Header/>
        <div className ="row">
          <div className="col-md-2"></div>
          <div className ="col-md-8">
            <h1 className="head orange bold">Añadir una nueva receta</h1>
            <p className="bod">Llena todos los campos para guardar tu receta</p>


            <RecipeForm
              title={this.state.title}
              setTitle={this.handleTitle.bind(this)}
              addIngredient={this.addIngredient.bind(this)}
              deleteIngredient={this.deleteIngredient.bind(this)}
            />
            <FormGroup className="bod" controlId="formControlsTextarea">
                <ControlLabel>Instrucciones</ControlLabel>
                <FormControl
                  componentClass="textarea"
                  placeholder="Pasos para hacer tu receta"
                  value={this.state.description}
                  onChange={this.handleInstructions.bind(this)}
                />
            </FormGroup>

            <FormGroup controlId="formControlsText">
                <ControlLabel>Agrega una imagen o video</ControlLabel>
                <FormControl
                  type="text"
                  value={this.props.pictureGif}
                  placeholder="La mejor receta del mundo"
                  onChange={this.handlePicture.bind(this)}
                />
            </FormGroup>

            <Button className="bod" onClick={() => {this.saveRecipe.bind(this)}}>
              Añadir receta
            </Button>
          </div>
          <div className="col-md-2"></div>
          </div>
      </div>
    );
  }
}
AddRecipe.propTypes = {
  myRecipes: PropTypes.array.isRequired,
};

export default createContainer(() => {
  return {
    myRecipes: UsersWithRecipesCollection.find({user:Meteor.user()}).fetch(),
    currentUser: Meteor.user()
  };
}, AddRecipe);
