import React, {Component} from 'react';
import {Table, Button, Well} from 'react-bootstrap';

const ROOT_URL = "https://tramii-cooky-back.herokuapp.com";

class Ingredient extends Component {

  render(){
    return(
      <div>
        {this.props.name}
      </div>
    );
  }

}

export default Ingredient;
