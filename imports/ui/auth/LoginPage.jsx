import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { createContainer } from 'meteor/react-meteor-data'
import Header from '../Header.jsx';

export default class LoginPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      error: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    let email = document.getElementById('login-email').value;
    let password = document.getElementById('login-password').value;
    Meteor.loginWithPassword(email, password, (err) => {
      if(err){
        this.setState({
          error: err.reason
        });
      } else {

      }
    });
  }

  render(){
    const error = this.state.error;
    return (
      <div className="row">
        <Header/>
        <div className="modal show">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="text-center">Login</h1>
            </div>
            <div className="modal-body">
              { error.length > 0 ? <div className="alert alert-danger fade in">{error}</div> :''}
              <form id="login-form" className="form col-md-12 center-block" onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <input type="email" id="login-email" className="form-control input-lg" placeholder="email"/>
                </div>
                <div className="form-group">
                  <input type="password" id="login-password" className="form-control input-lg" placeholder="password"/>
                </div>
                <div className="form-group text-center">
                  <div className="col-md-6">
                    <input type="submit" id="login-button" className="btn btn-app btn-lg btn-block" value="Login" />
                  </div>
                  <div className="col-md-6">
                    <Link className="btn btn-danger btn-lg btn-block" to={'/' }>Go Back</Link>

                  </div>

              </div>
                <div className="row form-group text-center">
                  <p className="text-center">Don't have an account? Register <Link to="/signup">here</Link></p>
                </div>
              </form>
            </div>
            <div className="modal-footer" style={{borderTop: 0}}></div>
          </div>
        </div>
      </div></div>
    );
  }
}
