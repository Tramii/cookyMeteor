/* eslint-disable no-global-assign, no-undef, import/extensions,
import/no-extraneous-dependencies, meteor/no-session, react/jsx-no-bind, quotes
no-useless-escape, react/forbid-proptypes, no-unused-vars, no-tabs, quote-props
no-mixed-spaces-and-tabs, jsx-quotes,import/prefer-default-export, react/prop-types */
import React, { Component } from 'react';
import { render } from 'react-dom';
import { Well, Button } from 'react-bootstrap';
import { Meteor } from 'meteor/meteor';
import { Link } from 'react-router-dom';

export default class HomePage extends Component {

  render() {
    return (
      <div className="pad" name="app">
        { new WOW().init() }
        <section id="intro" className="colored text-center">
          <div className="container">
            <div className="intro-well wow animated bounceIn row" >
              <div className="col-md-1" />
              <div className="col-md-6">
                <h1 className="textP head orange bold"> Bienvenido a</h1>
              </div>
              <div className="col-md-4" id="space" />
              <div className="col-md-1" id="space" />
              <div className="col-md-1" />
              <div className="col-md-5"><img className="bigCooky" src="https://68.media.tumblr.com/caa95bb0890f2f65129cd56a50130c64/tumblr_omd0idc0Wd1w7ypfio1_1280.png" alt="Cooky logo" /></div>
              <div className="col-md-4">
                {Meteor.user()
                  ?
                    <div>
                      <div className="ingresa head grey"><strong>Bienvenido!</strong></div> <br /><br />
                      <Button><Link
                        className="" to={'/general/featured'}
                      >
                        <i className="fa fa-ok fa-2x">
                          <span id="add" className="head grey"> <strong>Comienza a explorar</strong></span>
                        </i>
                      </Link></Button></div>
                      :
                    <div>
                      <div className="ingresa head grey"><strong>Ingresa ya!</strong></div> <br /><br />
                      <Button><Link
                        className="" to={'/login'}
                      >
                        <i className="fa fa-sign-in fa-2x">
                          <span id="add" className="head grey"> <strong>Sign In</strong></span>
                        </i>
                      </Link></Button></div>}

                <br /> <br />
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
          <br />
          <div className="container">
            <div className="row" id="icon-row">
              <div className="col-md-4 wow fadeInUp animated" data-wow-delay="0.4s">
                <Well>
                  <h3 className="center row">
                    <i className="fa fa-fw fa-bullhorn fa-2x" /><br />
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
                    <i className="fa fa-fw fa-star fa-2x" /><br />
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
                    <i className="fa fa-fw fa-search fa-2x" /><br />
                    <strong className="orange">Busca</strong> por ingredientes
                  </h3>
                  <p className="row desc">
                   Encuentra recetas de acuerdo a los ingredientes que tengas en tu cocina.
                  </p>
                </Well>
              </div>
            </div>
            <div className="col-md-12 wow fadeInUp animated final" data-wow-delay="0.2s">
              <br /><br />
              <h3>
                 ¡Únete y consigue recetas para toda ocasión!
              </h3>
              <br /><br /><br />
            </div>
          </div>
        </section>
      </div>);
  }
}
