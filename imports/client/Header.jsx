import React, {Component} from 'react';
import {render} from 'react-dom';
import  {Link}  from 'react-router-dom';

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
											<li><Link to="/general/Votos"  >Lo más votado</Link></li>
                      {/*{/if}*/}
											<li><Link to="/general/Busqueda"  >quiero buscar algo especifico</Link></li>
                    </ul>
                  </li>

                  {/**{#if isInRole 'admin,secrets'}}
                  <li><a href="/secrets">Secrets</a></li>
                  {{/if}*/}

                  <li className="dropdown pull-center">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown">Mis recetas<b className="caret"></b></a>
                    <ul className="dropdown-menu">
                      {/**{#if isInRole 'admin,manage-users'}*/}
											<li><Link to="/misRecetas/adicionar"  >Añadir receta</Link></li>
                      {/*{/if}*/}
                      <li><Link to="/misRecetas/ver"  >Ver mis recetas</Link></li>
                    </ul>
                  </li>

                  <li className="dropdown pull-center perfil">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown">Mi Perfil<b className="caret"></b></a>
                    <ul className="dropdown-menu">
                      {/**{#if isInRole 'admin,manage-users'}*/}
                      <li><Link to="/miPerfil"  >Mostrar info</Link></li>
                      {/*{/if}*/}
                      <li><Link to="/"   onClick={()=>{this.signOut();}}>Sign out</Link></li>
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
