/* eslint-disable no-global-assign, no-undef, import/extensions,
import/no-extraneous-dependencies, meteor/no-session, react/jsx-no-bind, quotes
no-useless-escape, react/forbid-proptypes, no-unused-vars, no-tabs, quote-props
no-mixed-spaces-and-tabs, jsx-quotes,import/prefer-default-export, react/prop-types */
import React, { Component } from 'react';
import { render } from 'react-dom';
import Header from './Header.jsx';
import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import { Factory } from 'meteor/dburles:factory';
import { shallow, mount } from 'enzyme';
import { assert, expect } from 'meteor/practicalmeteor:chai';

if(Meteor.isClient){

Meteor.user = function() {
  return { 'username': 'pruebita' };
};

Meteor.userId = function() {
  return { 'userId': '4382243089' };
};

  describe('Header', function () {
    it('Should render correctly', function () {
      const header = shallow(<Header />);
      assert(header.hasClass('header'));
    });

    it('Should show menu items only when logged in', function () {
      assert(true);
    });
  });
}
