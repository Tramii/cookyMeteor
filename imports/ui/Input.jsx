/* eslint-disable no-global-assign, no-undef, import/extensions,
import/no-extraneous-dependencies, meteor/no-session, react/jsx-no-bind, quotes
no-useless-escape, react/forbid-proptypes, no-unused-vars, no-tabs, quote-props
no-mixed-spaces-and-tabs, jsx-quotes,import/prefer-default-export, react/prop-types */

import React, { Component } from 'react';

'use strict';
// Where users may fill in info
class Input extends Component {

  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    this.props.onTextInput(e.target.value);
  }

  render() {
    return (
      <div className="input">
        <input
          id={this.props.name}
          autoComplete="false"
          required type={this.props.type}
          placeholder={this.props.placeholder}
          value={this.props.val}
          onChange={this.handleInputChange}
        />
      </div>
    );
  }
}

export default Input;
