//Igual que en Header no veo la necesidad de crear otro componente, se podría poner esto en App.jsx y si no se quiere poner todo en el Render se pueden crear funciones que tengan todo el html y llamarlas en el render()
import React, {Component} from 'react';
import {render} from 'react-dom';
import {Well} from 'react-bootstrap';
import { Meteor } from 'meteor/meteor';

export default class HomePage extends Component {


	render()
	{
		return(
			<div name="app">
				{new WOW().init()}
        <section id="intro" className="colored text-center">
          <div className="container">
            <div className="intro-well wow animated bounceIn" >
              <div className="row">
                  <h1 className="textP head orange bold"> Bienvenido a</h1>
              </div>
							<div className="row">
								<img className="bigCooky" src="https://68.media.tumblr.com/caa95bb0890f2f65129cd56a50130c64/tumblr_omd0idc0Wd1w7ypfio1_1280.png" alt="Cooky logo"/>
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
									<h3 className="center row">
										<i className="fa fa-fw fa-bullhorn fa-2x"></i><br/>
										<strong className="orange">Comparte</strong> tus recetas
									</h3>
									<p className="row desc">
										Añade tus recetas y compártelas con la comunidad.
									</p>
								</Well>
              </div>
              <div className="col-md-4 wow fadeInUp animated" data-wow-delay="0.8s">
                <Well>
									<h3 className="center row">
										<i className="fa fa-fw fa-star fa-2x"></i><br/>
										<strong className="orange">Descubre</strong> nuevas recetas
									</h3>
									<p className="row desc">
										Mira recetas de otros usuarios y guarda tus favoritas.
									</p>
								</Well>
              </div>
              <div className="col-md-4 wow fadeInUp animated" data-wow-delay="1.2s">
								<Well>
									<h3 className="center row">
										<i className="fa fa-fw fa-search fa-2x"></i><br/>
										<strong className="orange">Busca</strong> por ingredientes
									</h3>
									<p className="row desc">
										Encuentra recetas de acuerdo a los ingredientes que tengas en tu cocina.
									</p>
								</Well>
              </div>
            </div>
						<div className="col-md-12 wow fadeInUp animated final" data-wow-delay="1.4s">
							<br/><br/>
							<h3>
							  ¡Únete y consigue recetas para toda ocasión!
							</h3>
							<br/><br/><br/>
						</div>
          </div>
        </section>
      </div>);
	}
}
