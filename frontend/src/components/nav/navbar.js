// src/components/nav/navbar.js
import React from 'react';
import { Link } from 'react-router-dom'
import './navbar.css'
import HeaderDropDown from '../dropdown/header_dropdown'
import LoginDropdown from '../dropdown/login_header_dropdown';

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
          {/* <button onClick={this.logoutUser}className="logout-button">Logout</button> */}
          <HeaderDropDown logout={this.logoutUser}/>
        </div>
      );
    } else {
      return (
        <div className='link-list'>
          <Link to={'/signup'}>Signup</Link>
          <br />
          <Link to={'/login'}>Login</Link>
          <LoginDropdown />
        </div>
      );
    }
  }

  render() {
    return (
      <div className="nav-bar">
        <h1 className="app-name">M(ern) S(tack) Paint</h1>
        <br />
        {this.getLinks()}
      </div>
    );
  }
}

export default NavBar;