import React, { Component } from 'react';
import Header from './Header.jsx';

import { render } from 'react-dom';

export default class Me extends Component {
  render() {
    return (
      <div className="pad" name="app">
        <Header/>
        <div className="container">
          <h1 className="head orange bold">@{Meteor.user().username}</h1>
          <hr />
          <div className="row">
            <div className="col-md-3">
              <div className="text-center">
                <img src="https://conferencecloud-assets.s3.amazonaws.com/default_avatar.png" className="avatar img-circle" alt="avatar" />
              </div>
            </div>

            <div className="col-md-9 personal-info bod">
              <div className="alert alert-info alert-dismissable">
                <a className="panel-close close" data-dismiss="alert">×</a>
                <i className="fa fa-coffee" />
              </div>
              <h3>Información personal</h3>

                <div>
                  <ul>
                    <li>Nombre</li>
                    <li>Edad</li>
                    <li>Sexo</li>
                  </ul>
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
