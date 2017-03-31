import React, { Component, PropTypes } from 'react';
import { FormGroup, ControlLabel, FormControl, Checkbox, HelpBlock } from 'react-bootstrap';
import AddedIngredients from './addedIngredients.jsx';
import { createContainer } from 'meteor/react-meteor-data';
import { UsersWithRecipesCollection } from '../../api/users.js';

class RecipeForm extends Component {

  render() {
    return (
      <div className="bod">
        <FormGroup controlId="formControlsText1">
          <ControlLabel>Título</ControlLabel>
          <FormControl
            type="text"
            value={this.props.title}
            placeholder="La mejor receta del mundo"
            onChange={this.props.setTitle}
          />
        </FormGroup>
        <FormGroup>
          <ControlLabel>Tipo</ControlLabel>
          <br />
          <Checkbox inline onChange={(event) => {this.props.addType(event.target); }} name="1">Desayuno </Checkbox>
          {' '}
          <Checkbox inline onChange={(event) => {this.props.addType(event.target); }} name="2">Almuerzo o Cena </Checkbox>
          {' '}
          <Checkbox inline onChange={(event) => {this.props.addType(event.target); }} name="3">Postre </Checkbox>
        </FormGroup>
        <FormGroup controlId="formControlsText">
          <ControlLabel>Ingredientes</ControlLabel>
          <AddedIngredients
            ingredients={this.props.ingredients}
            addIngredient={this.props.addIngredient}
            deleteIngredient={this.props.deleteIngredient}
          />
          <HelpBlock> Presiona Enter para guardar el ingrediente.</HelpBlock>
        </FormGroup>
      </div>
    );
  }
}
export default RecipeForm;
