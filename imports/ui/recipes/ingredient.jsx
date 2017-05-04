import React, { Component } from 'react';

class Ingredient extends Component {

  render() {
    return (
      <div className="ingredient">
        <li>{this.props.name}</li>
      </div>
    );
  }

}

export default Ingredient;
