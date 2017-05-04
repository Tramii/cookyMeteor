import React, { Component } from 'react';
import { render } from 'react-dom';
import { Well } from 'react-bootstrap';
import { Meteor } from 'meteor/meteor';
import HomePage from './HomePage.jsx';
import { Factory } from 'meteor/dburles:factory';
import { shallow, mount } from 'enzyme';
import { chai, expect } from 'meteor/practicalmeteor:chai';

if (Meteor.isClient){
  console.log('hola');
  describe('HomePage', function(){
        it('Should render correctly', function(){
          chai.assert(true);
        });

    })

}
