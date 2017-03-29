import React, { Component, PropTypes } from 'react';
import {Button, Well, Table, FormGroup, ControlLabel, FormControl, Checkbox} from 'react-bootstrap';
import Ingredients from './ingredients'
import Input from '../Input.jsx'
import Header from '../Header.jsx';
import { createContainer } from 'meteor/react-meteor-data';
import { UsersWithRecipesCollection } from '../../api/users.js';

"use strict";

//José Felipe: En este caso no se si es mas facil utilizar una colleción de meteor para manejar las recetas.
//Aun asi diria que si ya el backend esta hecho, mejor utilizarlo como lo hicieron aqui.
const ROOT_URL = "https://tramii-cooky-back.herokuapp.com";//"http://localhost:3000"//
class AddRecipe extends Component{

  constructor(props){
    super(props);
    this.state = {
      title: '',
      type:-1,
      description:'',
      ingredients:[],
      pictureGif:' nop '
    }
    this.escribeInstructions = this.escribeInstructions.bind(this);
    this.escribeTitle = this.escribeTitle.bind(this);
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

  /*Sets recipe's instructions*/
  escribeInstructions(value)
  {
    this.setState({description: value})
  }

  /*Sets recipe's title*/
  escribeTitle(value)
  {
    this.setState({title: value})
  }

  /*FieldGroup*/
  FieldGroup({ id, label, help, ...props }) {
    return (
      <FormGroup controlId={id}>
        <ControlLabel>{label}</ControlLabel>
        <FormControl {...props} />
        {help && <HelpBlock>{help}</HelpBlock>}
      </FormGroup>
    );
  }

  render(){

    /*Form instance that will be rendered*/
    let formInstance = (
    <form className="bod">
      <FormGroup controlId="formControlsText">
        <ControlLabel>Título</ControlLabel>
        <FormControl type="text" value={this.state.title} placeholder="La mejor receta del mundo" onChange={this.state.title}/>
      </FormGroup>

      <FormGroup controlId="formControlsFile">
        <ControlLabel>Adjunta una imagen</ControlLabel>
        <FormControl type="file"/>
      </FormGroup>

      <FormGroup>
        <ControlLabel>Tipo</ControlLabel>
        <Checkbox inline>
          Desayuno
        </Checkbox>
        {' '}
        <Checkbox inline>
          Almuerzo o Cena
        </Checkbox>
        {' '}
        <Checkbox inline>
          Postre
        </Checkbox>
      </FormGroup>

      <FormGroup controlId="formControlsText">
        <ControlLabel>Ingredientes</ControlLabel>
        <FormControl type="text" value={this.state.title} placeholder="Ingrediente 1" onChange={this.state.title}/>
      </FormGroup>

      <FormGroup controlId="formControlsTextarea">
        <ControlLabel>Instrucciones</ControlLabel>
        <FormControl componentClass="textarea" placeholder="Pasos para hacer tu receta" />
      </FormGroup>

    </form>
  );

    return (
      <div>
        <Header/>
        <div className ="row">
          <div className="col-md-2"></div>
          <div className ="col-md-8">
            <h2 className="head orange">Añadir una nueva receta</h2>
            <p>Llena todos los cambios para guardar tu receta</p>
            {formInstance}
            <Button onClick={() => {this.postRecipe()}}>Añadir receta</Button>
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
