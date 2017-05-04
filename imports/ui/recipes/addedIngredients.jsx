import React, { Component } from 'react';
import AddedIngredient from './addedIngredient.jsx';
import { FormGroup, ControlLabel, FormControl, Checkbox, HelpBlock } from 'react-bootstrap';

class AddedIngredients extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currIngredient: '',
    };
  }

  handleIngredient(event) {
    this.setState({
      currIngredient: event.target.value,
    });
  }

  addIngredient(event) {
    event.preventDefault();
    this.props.addIngredient(this.state.currIngredient);
    this.setState({
      currIngredient: '',
    }, () => {
    });
  }

  render() {
    return (
      <div className="addedIngredients">

        {this.props.ingredients.map(ingredient => {
          return (
            <div key={ingredient}>
              <AddedIngredient
                text={ingredient}
                deleteIngredient={this.props.deleteIngredient}
              />
            </div>
          );
        })}

        <div className="col-md-12"><div className="Enter">
          <form onSubmit={this.addIngredient.bind(this)} className="inputEnter">
            <input
              value={this.state.currIngredient}
              type="text"
              placeholder="Ingrediente1"
              onChange={this.handleIngredient.bind(this)}
              aria-label="Ingresa un ingrediente"
            />
          </form></div><HelpBlock className="col-md-7 Enter2">Presiona Enter para guardar el ingrediente.</HelpBlock></div>
      </div>
    );
  }
}

export default AddedIngredients;
