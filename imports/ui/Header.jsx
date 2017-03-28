import React, {Component} from 'react';
import {render} from 'react-dom';
import { Template } from 'meteor/templating';
import {Link} from 'react-router-dom';
import Accounts from './AccountsUIWrapper.jsx';
import { Meteor } from 'meteor/meteor';

export default class Header extends Component {
	constructor(props) {
        super(props);

        this.state = {
            log: '',
        }
  }

	render()
	{
		var bar;
		var logueado = Meteor.user();
		console.log(logueado);
		if(logueado !== null)
		{
			bar = (<div><li className="nav-item bod">
											<Link to="/misRecetas/adicionar">Añadir receta</Link>
									 </li>
									 <li className="nav-item bod">
									 <Link to="/misRecetas/ver">Ver mis recetas</Link>
									 </li>
									 <li className="nav-item bod">
									 <Link to="/general/featured">Destacado</Link>
									 </li>
									 <li className="nav-item bod">
											<Link to="/general/search">Buscar</Link>
										</li>
										<li className="dropdown pull-center perfil">
											<a href="#" className="dropdown-toggle" data-toggle="dropdown">Mi Perfil<b className="caret"></b></a>
											<ul className="dropdown-menu">
												<li><Link to="/miPerfil">Mostrar info</Link></li>
											</ul>
										</li>
										<li className="dropdown pull-center signIn"><a><Accounts /></a></li>
								</div>);
		}
		else{
			bar = (<div><li className="nav-item bod hide">
										<Link to="/misRecetas/adicionar">Añadir receta</Link>
									</li>
									<li className="nav-item bod hide">
										<Link to="/misRecetas/ver">Ver mis recetas</Link>
									</li>
									<li className="nav-item bod hide">
										<Link to="/general/featured">Destacado</Link>
									</li>
									<li className="nav-item bod hide">
										<Link to="/general/search">Buscar</Link>
									</li>
									<li className="dropdown pull-center perfil hide">
										<a href="#" className="dropdown-toggle" data-toggle="dropdown">Mi Perfil<b className="caret"></b></a>
										<ul className="dropdown-menu">
											<li><Link to="/miPerfil">Mostrar info</Link></li>

										</ul>
									</li>
									<li className="dropdown pull-center signIn"><a><Accounts /></a></li>
							</div>);
		}

		return(
      <div name="header">
        <div className="navbar navbar-default navbar-fixed-top">
          <div className="navbar-inner">
              <a className="brand head bold" href="/"><strong>Cooky</strong></a>
              <div className="nav-collapse collapse">
                <ul className="nav">
										{bar}
                </ul>
              </div>
              <br/>
          </div>
        </div>
      </div>
		);
	}
}
