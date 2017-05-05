/* eslint-disable no-global-assign, no-undef, import/extensions,
import/no-extraneous-dependencies, meteor/no-session, react/jsx-no-bind,
no-useless-escape, react/forbid-proptypes, no-unused-vars, no-tabs,
no-mixed-spaces-and-tabs, jsx-quotes,import/prefer-default-export */
import React, { Component } from 'react';
import { browserHistory, Link } from 'react-router-dom';
import { createContainer } from 'meteor/react-meteor-data';
import { Redirect } from 'react-router';
import Header from '../Header.jsx';

export default class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: '',
      redirect: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
    Meteor.loginWithPassword(username, password, (err) => {
      if (err) {
        this.setState({
          error: err.reason,
        });
      } else {
        this.setState({
          redirect: true,
        });
      }
    });
  }

  render() {
    if (this.state.redirect) {
      console.log("entra a redirigir");
      return <Redirect to="/" />;
    }
    const error = this.state.error;
    return (
      <div className="row">
        <Header />
        <div className="modal show">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="text-center head">Sign In</h1>
            </div>
            <div className="modal-body">
              { error.length > 0 ? <div className="alert alert-danger fade in">{error}</div> :''}
              <form id="login-form" className="form col-md-12 center-block" onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <input type="username" id="login-username" className="form-control input-lg" placeholder="username" />
                </div>
                <div className="form-group">
                  <input type="password" id="login-password" className="form-control input-lg" placeholder="password" />
                </div>
                <div className="form-group text-center">
                  <div className="col-md-6">
                    <input type="submit" id="login-button" className="btn btn-app btn-lg btn-block" value="Sign In" />
                  </div>
                  <div className="col-md-6">
                    <Link className="btn btn-danger btn-lg btn-block head" to={'/'}>Go Back</Link>
                  </div>

                </div>
                <div className="row form-group text-center">
                  <p className="text-center head">Don't have an account? Register <Link to="/signup">here</Link></p>
                </div>
              </form>
            </div>
            <div className="modal-footer" style={{ borderTop: 0 }}></div>
          </div>
        </div>
        </div></div>
    );
  }
}
