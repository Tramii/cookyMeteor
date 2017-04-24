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
  logout() {
    Meteor.logout();
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
            <Link to="/misRecetas/adicionar" className="">
              <i className="fa fa-plus  text-center black" aria-hidden="true" /> Añadir receta
            </Link>
          </NavItem>
          <NavItem className="bod">
            <Link to="/misRecetas/ver" className="">
              <i className="fa fa-cutlery  text-center black" aria-hidden="true" /> Mis recetas
            </Link>
          </NavItem>
          <NavItem className="bod">
            <Link to="/general/featured" className="">
              <i className="fa fa-star  text-center black" aria-hidden="true" /> Destacado
            </Link>
          </NavItem>
          <NavItem className="bod">
            <Link to="/general/search" className="">
              <i className="fa fa-search  text-center black" aria-hidden="true" /> Buscar
            </Link>
          </NavItem>
          <NavItem className="bod">
            <Link to="/miPerfil" className="">
              <i className="fa fa-child  text-center black" aria-hidden="true" /> Mi perfil
            </Link>
          </NavItem>

          <NavItem className="bod">
            <Link className="" to={'/' } >
            <i className="fa fa-sign-out text-center black">
              <span id="add" onClick={()=>{this.logout()}}>Sign Out</span>
            </i>
          </Link>
          </NavItem>
        </Nav>
            );
    } else {
      bar = (
        <Nav>

          <NavItem className="bod">
            <Link className="" to={'/login' }>
            <i className="fa fa-sign-in btn text-center black">
              <span id="add">Sign In / Sign up</span>
            </i>
          </Link>
          </NavItem>
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
