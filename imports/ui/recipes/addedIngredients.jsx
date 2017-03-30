import React, {Component} from 'react';
import AddedIngredient from './addedIngredient.jsx';

class AddedIngredients extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currIngredient: '',
      ingredients: []
    }
  }

  addIngredient(event) {
    event.preventDefault();
    this.setState({
      ingredients: this.state.ingredients.concat(this.state.currIngredient),
      currIngredient: ''
    });
  }

  deleteIngredient(ing){
    var found = false;
    var i = 0;
    while (!found){
      if (ing === this.state.ingredients[i]){
        this.state.ingredients.splice(i,1);
        found === true;
      }
    }
  }

  handleIngredient(event) {
    this.setState({
        currIngredient: event.target.value
      }, ()=>{
      console.log(currIngredient);
    });
  }

  render() {
    return(
      <div>
        {this.state.ingredients.map(ingredient => {
          return <AddedIngredient text={ingredient} deleteIngredient={this.deleteIngredient.bind(this)} />
        })}
        <div>
          <form onSubmit={this.addIngredient.bind(this)}>
            <input value={this.state.currIngredient} type="text" placeholder="Ingrediente1" onChange={this.handleIngredient.bind(this)}/>
          </form>
        </div>
      </div>
    )
  }
}

export default AddedIngredients;
