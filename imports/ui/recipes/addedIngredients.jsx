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

  handleIngredient(event) {
    this.setState({
        currIngredient: event.target.value
      });
  }

  addIngredient(event) {
    event.preventDefault();
    this.props.addIngredient(this.state.currIngredient);
    this.setState({
      ingredients: this.state.ingredients.concat(this.state.currIngredient),
      currIngredient: ''
    },()=>{
      console.log(this.state.ingredients);
  });
  }

  deleteIngredient(ing){
    console.log('entraa1');
    this.props.deleteIngredient(ing);
    var found = false;
    var i = 0;
    while (!found){
      console.log('busca '+i);

      if (ing === this.state.ingredients[i]){
        found=true;
        var temp = this.state.ingredients;
        temp.splice(i,1);
        this.setState({
          ingredients: temp
        },()=>{

        });
      }
    }
  }

  render() {
    return(
      <div>

        {this.state.ingredients.map(ingredient => {
          return(
            <div key={ingredient}>
              <AddedIngredient
                text={ingredient}
                deleteIngredient={this.deleteIngredient.bind(this)}
              />
            </div>
          );
        })}

        <div>
          <form onSubmit={this.addIngredient.bind(this)}>
            <input
              value={this.state.currIngredient}
              type="text" placeholder="Ingrediente1"
              onChange={this.handleIngredient.bind(this)}
            />
          </form>
          <h4><small>Presiona Enter para guardar</small></h4>
        </div>

      </div>
    )
  }
}

export default AddedIngredients;
