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

                  <li className="dropdown pull-center">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown">General<b className="caret"></b></a>
                    <ul className="dropdown-menu">
                      {/**{#if isInRole 'admin,manage-users'}*/}
                      <li><a href="/general/Votos">Lo más votado</a></li>
                      {/*{/if}*/}
                      <li><a href="/general/Busqueda">quiero buscar algo especifico</a></li>
                    </ul>
                  </li>

                  {/**{#if isInRole 'admin,secrets'}}
                  <li><a href="/secrets">Secrets</a></li>
                  {{/if}*/}

                  <li className="dropdown pull-center">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown">Mis recetas<b className="caret"></b></a>
                    <ul className="dropdown-menu">
                      {/**{#if isInRole 'admin,manage-users'}*/}
                      <li><a href="/misRecetas/adicionar">Añadir receta</a></li>
                      {/*{/if}*/}
                      <li><a href="/misRecetas/ver">Ver mis recetas</a></li>
                    </ul>
                  </li>

                  <li className="dropdown pull-center perfil">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown">Mi Perfil<b className="caret"></b></a>
                    <ul className="dropdown-menu">
                      {/**{#if isInRole 'admin,manage-users'}*/}
                      <li><a href="/miPerfil">Mostrar info</a></li>
                      {/*{/if}*/}
                      <li><a href="/signout">Sign out</a></li>
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
