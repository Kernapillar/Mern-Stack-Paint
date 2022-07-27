// src/components/nav/navbar.js
import React from 'react';
// import { Link } from 'react-router-dom'
import './navbar.css'
import HeaderDropDown from '../dropdown/header_dropdown'
import LoginDropdown from '../dropdown/login_header_dropdown';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
    this.update = this.update.bind(this)
    this.state = {
      search: ""
    }
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }


  // Selectively render links dependent on whether the user is logged in
  getLinks() {
    if (this.props.loggedIn) {
      return (
        <div className="link-list">
          {/* link to /posts and /new_post? */}
          {/* <Link to={'/'} className="link">All Posts</Link>
          <Link to={'/profile'} className="link">Profile</Link>
          <Link to={'/posts/new'} className="link">Create a Post</Link> */}
          {/* <button onClick={this.logoutUser}className="logout-button">Logout</button> */}
          <div className='search-bar-container'>
            <input type="text" onChange={this.update('search')} placeholder="search" className='search-bar' />
            <span className="material-symbols-outlined">search</span> 
          </div>
          <HeaderDropDown className="header-dropdown-button"  logout={this.logoutUser}/>
        </div>
      );
    } else {
      return (
        <div className='link-list'>
          <div className='search-bar-container'>
            <input type="text" onChange={this.update('search')} placeholder="search" className='search-bar' />
            <span className="material-symbols-outlined">search</span> 
          </div>
          {/* <Link to={'/signup'}>Signup</Link>
          <br />
          <Link to={'/login'}>Login</Link> */}
          <LoginDropdown className="header-dropdown-button" />
        </div>
      );
    }
  }

  render() {
    return (
      <div className="nav-bar">
        {/* <h1 className="app-name">M(ern) S(tack) Paint</h1> */}
        <img className='header-logo' src="https://kernify-seed.s3.us-west-1.amazonaws.com/MSPaint.png" alt="" />
        <br />
        {this.getLinks()}
      </div>
    );
  }
}

export default NavBar;