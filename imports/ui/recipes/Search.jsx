import React, {Component} from 'react';
import {render} from 'react-dom';

import Header from '../Header.jsx';
import RecipeForm from './recipeForm.jsx';

export default class Search extends Component {
	constructor(props) {
				super(props);
				this.state = {
						log: '',
				}
	}

	render()
	{
		return(
			<div name="app">
				<Header/>
        <br/>
				<RecipeForm/>
			</div>
		);
	}
}
