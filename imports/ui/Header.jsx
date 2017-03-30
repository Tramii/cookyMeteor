//Sergio Velásquez: Creo que no hay necesidad de crear este Header.jsx, esto se podría poner en App.jsx sin que App.jsx quede muy cargado, porque pues en este momento esta casi desocupado
import React, {Component} from 'react';
import React, {Component} from 'react';
import {render} from 'react-dom';
import { Template } from 'meteor/templating';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Accounts from './AccountsUIWrapper.jsx';
import {createContainer} from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';

class Header extends Component {
	//No se usa log, por lo que no no se debería crear estado	
	constructor(props) {
		super(props);

		this.state = {
		    log: '',
		}
  	}

	login(x){
		this.setState({
			log:x
		})
	}

	render()
	{
		var bar;
		var logueado = Meteor.user();
		console.log(logueado);
		if(logueado !== null)
		{
			bar = (
				<Nav>
						<NavItem className="bod">
								<Link to="/misRecetas/adicionar">Añadir receta</Link>
						</NavItem>
						<NavItem className="bod">
								<Link to="/misRecetas/ver">Mis recetas</Link>
						</NavItem>
						<NavItem className="bod">
							 	<Link to="/general/featured">Destacado</Link>
						</NavItem>
						<NavItem className="bod">
								<Link to="/general/search">Buscar</Link>
						</NavItem>
						<NavItem className="bod">
								<Link to="/miPerfil">Mi perfil</Link>
						</NavItem>
						<NavItem className="dropdown pull-center signIn">
								<Accounts/>
						</NavItem>
				</Nav>
			);
		}
		else{
			bar = (
				<Nav>
						<NavItem className="dropdown pull-center signIn"><Accounts/></NavItem>
				</Nav>
			);
		}

		return(
      <div name = "header">
				<Navbar collapseOnSelect>
    				<Navbar.Header>
        				<Navbar.Brand className="head bold">
                				Cooky
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

export default createContainer(() =>{
	return{
		currentUser: Meteor.user()
	};
}, Header);
