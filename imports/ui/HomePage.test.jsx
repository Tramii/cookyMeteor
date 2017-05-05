/* eslint-disable no-global-assign, no-undef, import/extensions,
import/no-extraneous-dependencies, meteor/no-session, react/jsx-no-bind, quotes
no-useless-escape, react/forbid-proptypes, no-unused-vars, no-tabs, quote-props
no-mixed-spaces-and-tabs, jsx-quotes,import/prefer-default-export, react/prop-types */
import React, { Component } from 'react';
import { render } from 'react-dom';
import { Well } from 'react-bootstrap';
import { Meteor } from 'meteor/meteor';
import HomePage from './HomePage.jsx';
import { Factory } from 'meteor/dburles:factory';
import { shallow, mount } from 'enzyme';
import { chai, expect } from 'meteor/practicalmeteor:chai';

if (Meteor.isClient) {
  console.log('hola');
  describe(HomePage, function () {
    it('Should appear as a Client test', function () {
      chai.assert(true);
    });
  });
}
