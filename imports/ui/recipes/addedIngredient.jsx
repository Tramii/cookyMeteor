/* eslint-disable no-global-assign, react/prop-types */
import React, { Component } from 'react';
import { Button, Well } from 'react-bootstrap';

class AddedIngredient extends Component {

  render() {
    return (
      <div className="addedIngredient">
        <Well>
          { this.props.text }
          <Button className="right trsh" onClick={ () => this.props.deleteIngredient(this.props.text) }>
            <i className="fa fa-trash" aria-hidden="true" />
          </Button>
        </Well>
      </div>
    );
  }

}

export default AddedIngredient;
