import React, {Component} from 'react';
import AddedIngredient from './addedIngredient.jsx';

class AddedIngredients extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currIngredient: ''
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
          currIngredient: ''
      }, () => {
        
      });
  }

  render() {
    return(
      <div>

        {this.props.ingredients.map(ingredient => {
          return(
            <div key={ingredient}>
              <AddedIngredient
                text={ingredient}
                deleteIngredient={this.props.deleteIngredient}
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
