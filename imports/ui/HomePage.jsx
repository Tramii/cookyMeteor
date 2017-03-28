import React, {Component} from 'react';
import {render} from 'react-dom';
import {Well} from 'react-bootstrap';
import { Meteor } from 'meteor/meteor';

export default class HomePage extends Component {


	render()
	{
		return(
			<div name="app">
				<br/><br/>
				{new WOW().init()}
        <section id="intro" className="colored text-center">
          <div className="container">
            <div className="intro-well wow animated bounceIn" >
              <div className="row">
                  <h1 className="textP head orange bold"> Bienvenido a</h1>
              </div>
							<div className="row">
								<img className="bigCooky" src="https://68.media.tumblr.com/caa95bb0890f2f65129cd56a50130c64/tumblr_omd0idc0Wd1w7ypfio1_1280.png"/>
								<br/><br/>
							</div>
            </div>
          </div>
        </section>
        <section id="how-it-works" className="text-center bod">
          <div className="container wow fadeIn animated" >
            <div className="row col-md-12 bod">
              <h2 className="grey">¿Cómo funciona?</h2>
            </div>
          </div>
					<br/>
          <div className="container">
            <div className="row" id="icon-row">
              <div className="col-md-4 wow fadeInUp animated" data-wow-delay="0.4s">
                <Well>
									<h3 className="grey">Comparte tus recetas</h3>
								</Well>
              </div>
              <div className="col-md-4 wow fadeInUp animated" data-wow-delay="0.8s">
                <Well>
									<h3>Descubre nuevas recetas</h3>
								</Well>
              </div>
              <div className="col-md-4 wow fadeInUp animated" data-wow-delay="1.2s">
								<Well>
									<h3>Busca por ingredientes</h3>
								</Well>
              </div>
            </div>
						<div className="col-md-12 wow fadeInUp animated final" data-wow-delay="2.4s">
							<br/><br/>
							<h3>
							  Conviertete en el mejor chef!
							</h3>
							<br/><br/><br/>
						</div>
          </div>
        </section>
      </div>);
	}
}
