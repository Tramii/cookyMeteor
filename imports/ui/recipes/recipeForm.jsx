import React, {Component, PropTypes} from 'react';
import {Button,Well,Table,FormGroup,ControlLabel,FormControl,Checkbox} from 'react-bootstrap';
import AddedIngredients from './addedIngredients.jsx';
import {createContainer} from 'meteor/react-meteor-data';
import {UsersWithRecipesCollection} from '../../api/users.js';

class RecipeForm extends Component {

    render() {
        return (
            <div className="bod">

                <FormGroup controlId="formControlsText">
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
                    <br/>
                    <Checkbox inline>Desayuno </Checkbox>
                    {' '}
                    <Checkbox inline>Almuerzo o Cena </Checkbox>
                    {' '}
                    <Checkbox inline>Postre </Checkbox>
                </FormGroup>

                <FormGroup controlId="formControlsText">
                    <ControlLabel>Ingredientes</ControlLabel>
                    <AddedIngredients
                      addIngredient={this.props.addIngredient}
                      deleteIngredient={this.props.deleteIngredient}
                    />
                </FormGroup>

            </div>
        );
    }
}
export default RecipeForm;
