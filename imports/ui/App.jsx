/* eslint-disable no-global-assign, no-undef, import/extensions,
import/no-extraneous-dependencies, meteor/no-session, react/jsx-no-bind, quotes
no-useless-escape, react/forbid-proptypes, no-unused-vars, no-tabs, quote-props
no-mixed-spaces-and-tabs, jsx-quotes,import/prefer-default-export, react/prop-types */

import React, { Component } from 'react';
import { render } from 'react-dom';
import Header from './Header.jsx';
import HomePage from './HomePage.jsx';
export default class App extends Component {


  render() {
    return (
      <div name="app">
        <Header />
        <HomePage />
      </div>
    );
  }
}
