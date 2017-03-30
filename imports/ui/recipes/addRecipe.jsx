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
    event.preventDefault();
    this.setState({
      ingredients : this.state.comentarios.concat(this.state.comentarioActual),
      comentarioActual:''
    });
  }

  /*Sets recipe's instructions*/
  handleInstructions(event)
  {
    this.setState({
      description: event.target.value
    });
  }

  /*Sets recipe's title*/
  handleTitle(event)
  {
    this.setState({
      title: event.target.value
    })
  }

  /*Post recipe to MongoDB*/
  postRecipe(){
    if(this.state.title!=='' && this.state.description!=='' && this.state.ingredients!==[] )
    {
      console.log("esta haciendo el post recipe "+this.state.title+ "  "+this.state.description+"  "+ this.state.ingredients);
      axios.post(ROOT_URL + "/recipes/addRecipe", {
        nickName: 'Josega149',
        password: 'password',
        folder: 'Favoritos',
        recipe: {
                  tipo: 1,
                  likes: 0,
                  creadaPor: this.props.username,
                  title: this.state.title,
                  description: this.state.description,
                  pictureGif: this.state.pictureGif,
                  Ingredients:this.state.ingredients
                }
        })
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
            <p className="bod">Llena todos los cambios para guardar tu receta</p>

            <form className="bod">
            <RecipeForm
              title={this.state.title}
              setTitle={this.handleTitle.bind(this)}
            />
            <FormGroup controlId="formControlsFile">
              <ControlLabel>Adjunta una imagen</ControlLabel>
              <FormControl type="file"/>
            </FormGroup>
            </form>

            <Button onClick={() => {this.handleTitle.bind(this)}}>Añadir receta</Button>
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
