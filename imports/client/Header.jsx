import React, {Component} from 'react';
import {render} from 'react-dom';
import { Template } from 'meteor/templating';
import {Link} from 'react-router-dom';

export default class Header extends Component {


	render()
	{
		return(
      <div name="header">
        <div className="navbar navbar-default navbar-fixed-top">
          <div className="navbar-inner">
              <a className="brand head bold" href="/"><strong>Cooky</strong></a>

              {/**{#if currentUser}*/}
              <div className="nav-collapse collapse">
                <ul className="nav">

									<li className="nav-item bod">
										<Link to="/misRecetas/adicionar">Añadir receta</Link>
                      {/*{/if}*/}
                  </li>

									<li className="nav-item bod">
										<Link to="/misRecetas/ver">Ver mis recetas</Link>
										{/**{#if isInRole 'admin,manage-users'}*/}
									</li>

                  <li className="nav-item bod">
										<Link to="/general/Votos">Destacado</Link>
										{/**{#if isInRole 'admin,manage-users'}*/}
									</li>
									<li className="nav-item bod">
                    <Link to="/general/Busqueda">Buscar</Link>
                  </li>

                  {/**{#if isInRole 'admin,secrets'}}
                  <li><a href="/secrets">Secrets</a></li>
                  {{/if}*/}

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

		);
	}
}
