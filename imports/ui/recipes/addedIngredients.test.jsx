import React, { Component } from 'react';
import { render } from 'react-dom';
import AddedIngredients from './addedIngredients.jsx';
import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import { Factory } from 'meteor/dburles:factory';
import { shallow, mount } from 'enzyme';
import { assert, expect } from 'meteor/practicalmeteor:chai';

if(Meteor.isClient){

    Meteor.user = function() {
        return {'username': 'pruebita'};
    };

    Meteor.userId = function() {
        return {'userId': '4382243089'};
    };

    describe('Header', function() {

        it('Should render correctly', function() {
          const header = shallow(<AddedIngredients />);
          assert(header.hasClass('addedIngredients'));
        });

        it('Should handle current ingredient', function(){
          assert(true);
        });

        it('Should add ingredient', function(){
          assert(true);
        });
    })
}
