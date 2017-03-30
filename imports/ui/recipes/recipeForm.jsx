import React, {Component, PropTypes} from 'react';
import {Button,Well,Table,FormGroup,ControlLabel,FormControl,Checkbox} from 'react-bootstrap';
import AddedIngredients from './addedIngredients.jsx';
import {createContainer} from 'meteor/react-meteor-data';
import {UsersWithRecipesCollection} from '../../api/users.js';

class RecipeForm extends Component {

    render() {
        return (
            <div>

                <FormGroup controlId="formControlsText">
                    <ControlLabel>Título</ControlLabel>
                    <FormControl type="text" value={this.state.title} placeholder="La mejor receta del mundo" onChange={this.setTitle.bind(this)}/>
                </FormGroup>

                <FormGroup>
                    <ControlLabel>Tipo</ControlLabel>
                    <br/>
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
                    <AddedIngredients/>
                </FormGroup>

                <FormGroup controlId="formControlsTextarea">
                    <ControlLabel>Instrucciones</ControlLabel>
                    <FormControl componentClass="textarea" placeholder="Pasos para hacer tu receta"/>
                </FormGroup>
            </div>
        );
    }
}
export default RecipeForm;
