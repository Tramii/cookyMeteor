import React, { Component } from 'react';
import { render } from 'react-dom';
import AddedIngredient from './addedIngredient.jsx';
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

    describe('Added Ingredient', function() {

        it('Should render correctly', function() {
          const header = shallow(<AddedIngredient />);
          assert(header.hasClass("addedIngredient"));
        });

        it('Should show current ingredient', function(){
          assert(true);
        });

        it('Should be able to delete the ingredient', function(){
          assert(true);
        })
    })
}
