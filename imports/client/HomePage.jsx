import React, {Component} from 'react';
import {render} from 'react-dom';
import Accounts from './AccountsUIWrapper.jsx';

export default class HomePage extends Component {


	render()
	{
		return(
			<div name="app">
				<br/><br/><br/><br/><br/><br/>
				{new WOW().init()}
        <section id="intro" className="colored text-center">
          <div className="container">
            <div className="intro-well wow animated bounceIn" >
              <div className="row">
                <div className="col-lg-6 col-sm-6"></div>
                <div className="col-lg-6 col-sm-6 textP" >
                  <h1 className="textP">Bienvenido a Cooky</h1>
                  <Accounts /><br/>
                  <p>Si no tienes cuenta, ve directamente a <a onClick={() => {this.props.goProjects()}}>los proyectos</a></p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="how-it-works" className="text-center">
          <div className="container wow fadeIn animated" >
            <div className="row col-md-12">
              <br/><br/>
              <h3>¿Cómo funciona?</h3>
              <h4 className="text-justify">Demuestra tu lado culinario compartiendo tus recetas</h4>
            </div>
          </div>
          <div className="container">
            <div className="row" id="icon-row">
              <div className="col-md-3 wow fadeInUp animated" data-wow-delay="0.4s">
                <div className="iconbox">
                  <i className="fa fa-folder fa-3x"></i>
                </div>
                <h1 className="icntitle">1. Da like</h1>
                <p className="icnp text-justify">T</p>
              </div>
              <div className="col-md-3 wow fadeInUp animated" data-wow-delay="0.8s">
                <div className="iconbox">
                  <i className="fa fa-refresh fa-3x"></i>
                </div>
                <h1 className="icntitle">2. Guarda</h1>
                <p className="icnp text-justify">E
                </p>
              </div>
              <div className="col-md-3 wow fadeInUp animated" data-wow-delay="1.2s">
                <div className="iconbox">
                  <i className="fa fa-search fa-3x"></i>
                </div>
                <h1 className="icntitle">3. Crea nuevas recetas</h1>
                <p className="icnp text-justify">Aorresponda
                </p>
              </div>
              <div className="col-md-3 wow fadeInUp animated" data-wow-delay="1.6s">
                <div className="iconbox">
                  <i className="fa fa-check fa-3x"></i>
                </div>
                <h1 className="icntitle">4. Conviertete en un chef reconocido</h1>
                <p className="icnp text-justify">Lle el momento.</p>
              </div>
              <div className="col-md-12 wow fadeInUp animated" data-wow-delay="2.4s">
                <br/><br/>
                <h3 className="text-justify">
                  Si
                </h3>
              </div>
            </div>
          </div>
        </section>
      </div>);
	}
}
