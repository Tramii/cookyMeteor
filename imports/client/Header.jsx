import React, {Component} from 'react';
import {render} from 'react-dom';
import { Template } from 'meteor/templating';

export default class Header extends Component {


	render()
	{
		return(
      <div name="header">
        <div className="navbar navbar-inverse navbar-fixed-top">
          <div className="navbar-inner">
            <div className="container">
              <a className="btn btn-navbar">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </a>
              <br/>
              <a className="brand" href="/">COOKY!</a>

              {/**{#if currentUser}*/}
              <div className="nav-collapse collapse">
                <ul className="nav">

                  <li className="dropdown pull-right">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown">General<b className="caret"></b></a>
                    <ul className="dropdown-menu">
                      {/**{#if isInRole 'admin,manage-users'}*/}
                      <li><a href="/manageUsers">Lo más votado</a></li>
                      {/*{/if}*/}
                      <li><a className="signout" href="/signout">quiero buscar algo especifico</a></li>
                    </ul>
                  </li>

                  {/**{#if isInRole 'admin,secrets'}}
                  <li><a href="/secrets">Secrets</a></li>
                  {{/if}*/}

                  <li className="dropdown pull-right">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown">Mis recetas<b className="caret"></b></a>
                    <ul className="dropdown-menu">
                      {/**{#if isInRole 'admin,manage-users'}*/}
                      <li><a href="/manageUsers">Añadir receta</a></li>
                      {/*{/if}*/}
                      <li><a className="signout" href="/signout">Ver mis recetas</a></li>
                    </ul>
                  </li>

                  <li><a className="signout" href="/signout">Sign out</a></li>
                </ul>
              </div>
              {/**{/if}*/}
              <br/>
            </div>
          </div>
        </div>
      </div>

		);
	}
}
