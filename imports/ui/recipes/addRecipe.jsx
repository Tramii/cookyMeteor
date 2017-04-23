import React, {Component, PropTypes} from 'react';
import {
    Button,
    Well,
    Table,
    FormGroup,
    ControlLabel,
    FormControl,
    Checkbox
} from 'react-bootstrap';
import Header from '../Header.jsx';
import RecipeForm from './recipeForm.jsx';
import {createContainer} from 'meteor/react-meteor-data';
import {UsersWithRecipesCollection} from '../../api/users.js';
import {Link} from 'react-router-dom';

class AddRecipe extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            type: [],
            description: '',
            ingredients: [],
            pictureGif: ''
        };
    }

    /* Adds ingredient to ingredient list*/
    addIngredient(ing) {
        if (!ing.includes("<")) {
            let i = 0;
            const n = this.state.ingredients.length;
            let rep = false;
            while (i < n && !rep) {
                if (ing === this.state.ingredients[i]) {
                    rep = true;
                    console.log('Ingrediente repetido');
                    window.alert('Ingrediente repetido');
                }
                console.log('holaaaaaaaa ' + i);
                i++;
            }
            if (!rep) {
                this.setState({
                    ingredients: this.state.ingredients.concat(ing)
                }, () => {
                    console.log('holaa');
                    console.log(this.state.ingredients);
                });
            }
        }
    }

    /* Searches and deletes ingredient*/
    deleteIngredient(ing) {
        console.log('quiero borrar: ' + ing);
        let found = false;
        let i = 0;
        while (!found) {
            console.log('busca ' + i);
            if (ing === this.state.ingredients[i]) {
                const temp = this.state.ingredients;
                found = true;
                temp.splice(i, 1);
                this.setState({ingredients: temp});
            }
            i++;
        }
    }

    /* Sets recipe's instructions*/
    handleInstructions(event) {
        if (!event.target.value.includes("<")) {
            this.setState({description: event.target.value});
        }
    }

    /* Sets recipe's title*/
    handleTitle(event) {
        if (!event.target.value.includes("<")) {
            this.setState({title: event.target.value});
        }
    }

    /* Sets types: 1 is breakfast, 2 is lunch or dinner, 3 is dessert*/
    addType(chbx) {
        console.log(chbx.checked);
        if (chbx.checked) {
            console.log(chbx.name);
            this.setState({
                type: this.state.type.concat({tipo: chbx.name})
            });
        } else {
            let i = 0;
            let found = false;
            while (!found) {
                if (this.state.type[i].tipo === chbx.name) {
                    console.log('Found it!');
                    found = true;
                    const temp = this.state.type;
                    temp.splice(i, 1);
                    this.setState({type: temp});
                }
                i++;
            }
        }
    }

    /* Sets picture's URL*/
    handlePicture(event) {
        if (!event.target.value.includes("<") ) {
            this.setState({pictureGif: event.target.value});
        }
    }

    /* Post recipe to MongoDB*/
    saveRecipe() {
        console.log('entra a guardar');
        const ingr = [];
        for (let i = 0; i < this.state.ingredients.length; i++) {
            const newI = {
                "ingrediente": this.state.ingredients[i]
            };
            ingr.push(newI);
            // console.log(newI);
        }
        // console.log(ingr);
        if (this.state.title !== '' && this.state.description !== '' && ingr.length!==0 && this.state.type !== [] && this.state.pictureGif.includes("www") ) {
            console.log("esta haciendo el post recipe " + this.state.title + "  " + this.state.description + "  " + this.state.ingredients);
            const recipe = {
                "tipos": this.state.type,
                "likes": 0,
                "username": Meteor.user().username,
                "title": this.state.title,
                "description": this.state.description,
                "pictureGif": this.state.pictureGif,
                "Ingredients": ingr
            };
            Meteor.call('recipes.insert', recipe);
        } else {
            alert('Some required fields are missing');
        }
    }

    render() {
        return (
            <div className="pad">
                <Header/>
                <div className="row">
                    <div className="col-md-3"/>
                    <div className="col-md-6">
                        <h1 className="head orange bold">
                            <i className="fa fa-plus" aria-hidden="true"/> Añadir una nueva receta
                        </h1>
                        <p className="bod">Llena todos los campos para guardar tu receta</p>

                        <RecipeForm title={this.state.title} setTitle={this.handleTitle.bind(this)} ingredients={this.state.ingredients} addIngredient={this.addIngredient.bind(this)} deleteIngredient={this.deleteIngredient.bind(this)} addType={this.addType.bind(this)}/>
                        <FormGroup className="bod" controlId="formControlsTextarea">
                            <ControlLabel>Instrucciones</ControlLabel>
                            <FormControl componentClass="textarea" placeholder="Pasos para hacer tu receta" value={this.state.description} onChange={this.handleInstructions.bind(this)}/>
                        </FormGroup>

                        <FormGroup className="bod" controlId="formControlsText">
                            <ControlLabel>Agrega una imagen o video
                            </ControlLabel>
                            <FormControl type="text" value={this.props.pictureGif} placeholder="URL de la imagen o el video" onChange={this.handlePicture.bind(this)}/>
                        </FormGroup>

                        <div className="row buscar">
                            <Link to="/misRecetas/ver">
                                <Button bsSize="large" className="bod" onClick={this.saveRecipe.bind(this)}>
                                    <i className="fa fa-plus" aria-hidden="true"/>
                                    <strong>Añadir receta</strong>
                                </Button>
                            </Link>
                        </div>

                        <div className="row">
                            {' '}
                        </div>

                    </div>
                    <div className="col-md-3"/>
                </div>
            </div>
        );
    }
}

export default createContainer(() => {
    return {
        myRecipes: UsersWithRecipesCollection.find({user: Meteor.user()}).fetch(),
        currentUser: Meteor.user()
    };
}, AddRecipe);
