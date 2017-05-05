import React, { Component } from 'react';
import { render } from 'react-dom';
import Featured from './Featured.jsx';
import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import { Factory } from 'meteor/dburles:factory';
import { shallow, mount } from 'enzyme';
import { assert, expect } from 'meteor/practicalmeteor:chai';
import { UsersWithRecipesCollection } from '../../api/users.js';

if(Meteor.isClient){

    Meteor.user = function() {
        return {'username': 'pruebita'};
    };

    Meteor.userId = function() {
        return {'userId': '4382243089'};
    };

    describe('Featured recipes', function() {

      beforeEach(function() {
        Meteor.call('recipes.remove', 'JxojW4S4QW6CkJpye');
        Meteor.call('recipes.remove', 'HEsTX6vgjjES4CyEi');

        const recipe1 = {
          "tipos": [
              {
                  "tipo": "1"
              }
          ],
          "likes": 6,
          "username": Meteor.user().username,
          "title": "Parfait con yogurt",
          "description": "Preheat oven to 350ºF/180ºC\nIn a medium bowl combine granola ingredients, stir until well mixed.\nPour mixture onto a greased baking sheet and bake for 40-45 minutes, tossing halfway through to ensure even baking. \nSave granola for up to 2 months, or use right away.\nAssemble parfaits in bowls or mason jars (great for on the go!). Layer yogurt with granola and your choice of assorted mixed fruits and/or nuts, alternating layers.\nEnjoy!",
          "pictureGif": "https://www.youtube.com/watch?v=3ab-e37VSbI",
          "Ingredients": [
              {
                  "ingrediente": "Granola"
              }, {
                  "ingrediente": "Miel"
              }, {
                  "ingrediente": "Yogurt"
              }, {
                  "ingrediente": "Muchas frutas"
              }
          ]
        };
        const recipe2 = {
          "tipos": [
              {
                  "tipo": "1"
              }
          ],
          "likes": 8,
          "username": "josega149",
          "title": "Parfait con yogurt",
          "description": "Preheat oven to 350ºF/180ºC\nIn a medium bowl combine granola ingredients, stir until well mixed.\nPour mixture onto a greased baking sheet and bake for 40-45 minutes, tossing halfway through to ensure even baking. \nSave granola for up to 2 months, or use right away.\nAssemble parfaits in bowls or mason jars (great for on the go!). Layer yogurt with granola and your choice of assorted mixed fruits and/or nuts, alternating layers.\nEnjoy!",
          "pictureGif": "https://www.youtube.com/watch?v=3ab-e37VSbI",
          "Ingredients": [
              {
                  "ingrediente": "Granola"
              }, {
                  "ingrediente": "Miel"
              }, {
                  "ingrediente": "Yogurt"
              }, {
                  "ingrediente": "Muchas frutas"
              }
          ]
        };

        Meteor.call('recipes.insert', recipe1);
        Meteor.call('recipes.insert', recipe2);
      });

        it('Should render correctly', function() {
          const featured = shallow(<Featured />);
          assert(featured.hasClass('pad hello'));
        });

        it('Shows all recipes', function(){
          assert(true);
        });

        it('Should show recipes in descending order', function(){
          assert(true);
        });
    })
}
