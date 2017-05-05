import React, { Component } from 'react';
import { render } from 'react-dom';
import Recipe from './recipe.jsx';
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

    describe('Recipe', function() {

        it('Should render correctly', function() {
          const header = shallow(<Recipe />);
          assert(header.hasClass('col-md-6 recipe'));
        });

        it('Should update number of likes', function(){
          assert(true);
        });

        it('Should delete recipe if owner clicks on red button', function(){
          assert(true);
        });

        it('Should show video on hover', function(){
          assert(true);
        })
    })
}
