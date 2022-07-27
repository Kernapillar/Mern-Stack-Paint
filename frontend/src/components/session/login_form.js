// src/components/session/login_form.js
import React from 'react';
import { withRouter } from 'react-router-dom';
// import '../App.css'
import './session.css';


class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemoLogin = this.handleDemoLogin.bind(this);
    this.renderErrors = this.renderErrors.bind(this);

  }

  // Once the user has been authenticated, redirect to the posts page
  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser === true) {
      this.props.history.push('/');
      // this.props.history.push('/');
    }

    // Set or clear errors
    this.setState({ errors: nextProps.errors })
  }

  // Handle field updates (called in the render method)
  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  // Handle form submission
  handleSubmit(e) {
    e.preventDefault();

    let user = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.login(user);
  }

  handleDemoLogin (e) {
    e.preventDefault();  
    const demo = {
      email: "demodemo@demo.com",
      password: "123456"
    }

    this.props.login(demo)
  }

  // Render the session errors if there are any
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

  // View password or hide password based on toggle


  render() {
    return (
      <div className="page-container">
        <form onSubmit={this.handleSubmit}>
          <div className="form-container">
            <h1>Login</h1>
            <label>Email</label>
            <input type="text"
              value={this.state.email}
              onChange={this.update('email')}
              placeholder="Email"
            className="input-field"/>
            <br />

            <label>Password</label>
            <input type="password"
              value={this.state.password}
              onChange={this.update('password')}
              placeholder="Password"
            className="input-field"/>
            
            <br />
            <input type="submit" value="Submit" className="submit-button"/>
            {this.renderErrors()}
            <br />
            <br />
            <button className='submit-button' onClick={this.handleDemoLogin}> Demo Login </button>
          </div>
        </form>
        
      </div>
    );
  }
}

export default withRouter(LoginForm);