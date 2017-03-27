import React, {Component} from 'react';
import {render} from 'react-dom';
import Header from './Header.jsx';
import HomePage from './HomePage.jsx';
export default class App extends Component {


	render()
	{
		return(
			<div name="app">
				<Header/>
				<HomePage/>
			</div>
		);
	}
}
