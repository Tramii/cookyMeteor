import React, {Component} from 'react';
import {render} from 'react-dom';
import { Template } from 'meteor/templating';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
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
			bar = (<Nav>
										<NavItem className="bod">
											<Link to="/misRecetas/adicionar">Añadir receta</Link>
									 </NavItem>
									 <NavItem className="bod">
									 <Link to="/misRecetas/ver">Ver mis recetas</Link>
									 </NavItem>
									 <NavItem className="bod">
									 <Link to="/general/featured">Destacado</Link>
								 </NavItem>
									 <NavItem className="bod">
											<Link to="/general/search">Buscar</Link>
										</NavItem>
										<NavDropdown title="Mi Perfil" id="basic-nav-dropdown" className="bod perfil">
												<MenuItem><Link to="/miPerfil">Mostrar info</Link></MenuItem>
										</NavDropdown>
										<NavItem className="dropdown pull-center signIn"><a><Accounts /></a></NavItem>
								</Nav>);
		}
		else{
			bar = (<Nav><li className="nav-item bod hide">
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
							</Nav>);
		}

		return(
      <div name = "header">
				<Navbar collapseOnSelect>
    				<Navbar.Header>
        				<Navbar.Brand>
            				<a className="brand head bold" href="/">
                				<strong>Cooky</strong>
            				</a>
        				</Navbar.Brand>
    			</Navbar.Header>
					<Navbar.Collapse>

            {bar}
					</Navbar.Collapse>
				</Navbar>
		</div>
		);
	}
}
