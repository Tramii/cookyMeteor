import React, { Component } from 'react';

class Ingredient extends Component {

  render() {
    return (
      <div>
        <li>{this.props.name}</li>
      </div>
    );
  }

}

export default Ingredient;
