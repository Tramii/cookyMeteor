import React, { Component } from 'react';

import { render } from 'react-dom';

export default class Me extends Component {
  render() {
    return (
      <div className="pad" name="app">
        <div className="container">
          <h1>Edit Profile</h1>
          <hr />
          <div className="row">
            <div className="col-md-3">
              <div className="text-center">
                <img src="//placehold.it/100" className="avatar img-circle" alt="avatar" />
              </div>
            </div>

            <div className="col-md-9 personal-info">
              <div className="alert alert-info alert-dismissable">
                <a className="panel-close close" data-dismiss="alert">×</a>
                <i className="fa fa-coffee" />
              </div>
              <h3>Personal info</h3>

              <form className="form-horizontal" role="form">
                <div>
                  Agrega una descripcion.
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
