// src/components/session/signup_form.js

import React from 'react';
import { withRouter } from 'react-router-dom';
import "./session.css"

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      handle: '',
      password: '',
      password2: '',
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearedErrors = false;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.signedIn === true) {
      this.props.history.push('/login');
    }

    this.setState({ errors: nextProps.errors })
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = {
      email: this.state.email,
      handle: this.state.handle,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.signup(user, this.props.history);
  }

  renderErrors() {
    return (
      <ul>
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`}>
            {this.state.errors[error]}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="page-container">
        <form onSubmit={this.handleSubmit}>
          <div className="form-container">
            <h1>Sign Up</h1>
            <br />
            <label> Email </label>
            <input type="text"
              value={this.state.email}
              onChange={this.update('email')}
              placeholder="Email" className='input-field'
            />
            <br />
            <label> Username </label>
            <input type="text"
              value={this.state.handle}
              onChange={this.update('handle')}
              placeholder="Handle" className='input-field'
            />
            <br />
            <label> Password </label>
            <input type="password"
              value={this.state.password}
              onChange={this.update('password')}
              placeholder="Password" className='input-field'
            />
            <br />
            <label> Confirm Password </label>
            <input type="password"
              value={this.state.password2}
              onChange={this.update('password2')}
              placeholder="Confirm Password" className='input-field'
            />
            <br />
            <input type="submit" value="Submit" className="submit-button"/>
            {this.renderErrors()}
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SignupForm);