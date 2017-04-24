import React, { Component } from 'react';
import { render } from 'react-dom';
import { Template } from 'meteor/templating';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Accounts from './AccountsUIWrapper.jsx';
import Header from './Header.jsx';
import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import { Factory } from 'meteor/dburles:factory';
import { shallow, mount } from 'enzyme';
import { chai, expect } from 'meteor/practicalmeteor:chai';


    Meteor.user = function() {
        return {'username': 'pruebita'};
    };

    Meteor.userId = function() {
        return {'userId': '4382243089'};
    };

    describe('Header', function() {

        it('Should render correctly', function() {
          const header = shallow(<Header/>);
          chai.assert(header.hasClass('header'));
        })
    })
