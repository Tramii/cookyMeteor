import React, { Component } from 'react';
import { render } from 'react-dom';
import AddRecipe from './addRecipe.jsx';
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
          const header = shallow(<AddRecipe />);
          assert(header.hasClass('pad'));
        });

        it('Should add ingredient', function(){
          assert(true);
        });

        it('Should delete ingredient', function(){
          assert(true);
        });

        it('Should handle instructions', function(){
          assert(true);
        });

        it('Should handle the title', function(){
          assert(true);
        });

        it('Should add check and add the type', function(){
          assert(true);
        })

        it('Should handle picture or video', function(){
          assert(true);
        });

        it('Should save the recipe', function(){
          assert(true);
        });
    })
}
