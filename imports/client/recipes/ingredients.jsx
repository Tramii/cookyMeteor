import React, {Component} from 'react';
import axios from 'axios';
import {Table, Button, Well} from 'react-bootstrap';
import Ingredient from './ingredient';
import Input from '../sign/input'

class Ingredients extends Component {
  constructor(props){
    super(props);
    this.state = {
      ingredienteConstruccion:''
    }
    this.nuevoIngrediente = this.nuevoIngrediente.bind(this);
  }



  nuevoIngrediente(event)
  {
    this.setState({ingredienteConstruccion: {ingrediente:event}})
  }


  saveIngredient(){
    this.props.ingredients.push(this.state.ingredienteConstruccion);
    console.log(this.state.ingredienteConstruccion);
    console.log(this.props.ingredients);
    this.setState({ingredienteConstruccion : ''});
  }

  render(){
    return(
      <div>
        <Well>
            {this.props.ingredients.map((ingredient,i)=> {
                return <Ingredient name={ingredient.ingrediente} key={i}/>
              })}
            <Input name="nuevoIngrediente" type="text"  onTextInput={this.nuevoIngrediente}
             placeholder="New Ingredient" value={this.state.ingredienteConstruccion.name}/>
             <Button onClick={() => {this.saveIngredient()}}  bsStyle="info">Insert ingredient!</Button>
        </Well>
      </div>
    );
  }

}

export default Ingredients;
