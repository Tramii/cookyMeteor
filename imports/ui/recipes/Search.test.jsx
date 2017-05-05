import React, { Component } from 'react';
import { render } from 'react-dom';
import Search from './Search.jsx';
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

    describe('Search', function() {

        it('Should render correctly', function() {
          const header = shallow(<Search />);
          assert(header.hasClass('pad row'));
        });

        it('Should search by title', function(){
          assert(true);
        });

        it('Should search by type', function(){
          assert(true);
        });

        it('Should search by ingredients', function(){
          assert(true);
        });

        it('Should return to main search page', function(){
          assert(true);
        })

        it('Should add ingredient', function(){
          assert(true);
        });

        it('Should delete the ingredient', function(){
          assert(true);
        });

        it('Should handle title', function(){
          assert(true);
        });

        it ('Should handle instructions', function(){
          assert(true);
        });

        it('Should add type filter', function(){
          assert(true);
        });

    })
}
