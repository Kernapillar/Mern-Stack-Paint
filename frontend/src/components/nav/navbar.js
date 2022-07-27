// src/components/nav/navbar.js
import React from 'react';
import { Link } from 'react-router-dom'
import './navbar.css'

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
  }

  // Selectively render links dependent on whether the user is logged in
  getLinks() {
    if (this.props.loggedIn) {
      return (
        <div className="link-list">
          {/* link to /posts and /new_post? */}
          <Link to={'/'} className="link">All Posts</Link>
          <Link to={'/profile'} className="link">Profile</Link>
          <Link to={'/posts/new'} className="link">Create a Post</Link>
          <button onClick={this.logoutUser}className="logout-button">Logout</button>
        </div>
      );
    } else {
      return (
        <div className='link-list'>
          <Link to={'/signup'}>Signup</Link>
          <br />
          <Link to={'/login'}>Login</Link>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="nav-bar">
        <h1 className="app-name">Draw-ink</h1>
        <br />
        {this.getLinks()}
      </div>
    );
  }
}

export default NavBar;