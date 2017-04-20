import React, { Component } from 'react';
import { render } from 'react-dom';
import { Template } from 'meteor/templating';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Accounts from './AccountsUIWrapper.jsx';
import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      log: '',
    };
  }

  login(x) {
    this.setState({ log: x });
  }

  render()
  {
    var bar;
    var logueado = Meteor.user();
    console.log(logueado);
    if (logueado !== null) {
      bar = (
        <Nav>
          <NavItem className="bod">
            <Link to="/misRecetas/adicionar">
              <i className="fa fa-plus" aria-hidden="true" /> Añadir receta
            </Link>
          </NavItem>
          <NavItem className="bod">
            <Link to="/misRecetas/ver">
              <i className="fa fa-cutlery" aria-hidden="true" /> Mis recetas
            </Link>
          </NavItem>
          <NavItem className="bod">
            <Link to="/general/featured">
              <i className="fa fa-star" aria-hidden="true" /> Destacado
            </Link>
          </NavItem>
          <NavItem className="bod">
            <Link to="/general/search">
              <i className="fa fa-search" aria-hidden="true" /> Buscar
            </Link>
          </NavItem>
          <NavItem className="bod">
            <Link to="/miPerfil">
              <i className="fa fa-child" aria-hidden="true" /> Mi perfil
            </Link>
          </NavItem>
          <NavItem className="dropdown pull-center signIn">
            <Accounts />
          </NavItem>
        </Nav>
            );
    } else {
      bar = (
        <Nav>
          <NavItem className="dropdown pull-center signIn"><Accounts /></NavItem>
        </Nav>
      );
    }
    return (
      <div name="header">
        <Navbar collapseOnSelect className="navbar-fixed-top">
          <Navbar.Header>
            <Navbar.Brand className="head bold orange">
                Cooky
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            {bar}
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default createContainer(() => {
    return {currentUser: Meteor.user()};
}, Header);
