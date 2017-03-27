import React, {Component} from 'react';
import {render} from 'react-dom';
import { Template } from 'meteor/templating';
import {LinkContainer} from 'react-router-bootstrap';

export default class Header extends Component {

	signOut(){
		//todo
	}
	
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

                  <li className="dropdown pull-center">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown">General<b className="caret"></b></a>
                    <ul className="dropdown-menu">
                      {/**{#if isInRole 'admin,manage-users'}*/}
                      <li><LinkContainer to="/general/Votos">Lo más votado</LinkContainer></li>
                      {/*{/if}*/}
                      <li><LinkContainer to="/general/Busqueda">quiero buscar algo especifico</LinkContainer></li>
                    </ul>
                  </li>

                  {/**{#if isInRole 'admin,secrets'}}
                  <li><a href="/secrets">Secrets</a></li>
                  {{/if}*/}

                  <li className="dropdown pull-center">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown">Mis recetas<b className="caret"></b></a>
                    <ul className="dropdown-menu">
                      {/**{#if isInRole 'admin,manage-users'}*/}
                      <li><LinkContainer to="/misRecetas/adicionar">Añadir receta</LinkContainer></li>
                      {/*{/if}*/}
                      <li><LinkContainer to="/misRecetas/ver">Ver mis recetas</LinkContainer></li>
                    </ul>
                  </li>

                  <li className="dropdown pull-center perfil">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown">Mi Perfil<b className="caret"></b></a>
                    <ul className="dropdown-menu">
                      {/**{#if isInRole 'admin,manage-users'}*/}
                      <li><LinkContainer to="/miPerfil">Mostrar info</LinkContainer></li>
                      {/*{/if}*/}
                      <li><LinkContainer to="/" onClick={()=>{this.signOut();}}>Sign out</LinkContainer></li>
                    </ul>
                  </li>

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
