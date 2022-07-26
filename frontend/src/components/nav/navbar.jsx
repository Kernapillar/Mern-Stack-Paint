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
    this.update = this.update.bind(this)
    this.search = this.search.bind(this)
    this.homereload = this.homereload.bind(this)
    this.state = {
      search: ""
    }
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
  }

  search(e){
    e.preventDefault();
    // setTimeout(() => this.props.search(this.state.search).bind(this) , 1000 )
    this.props.search(this.state.search).then(res => setTimeout(()=> res, 10))
    // this.props.history.push(`/search/${this.state.search}`)
    this.setState({"search": ""})
  }

  update(field) {
    return e => 
    this.setState({ [field]: e.currentTarget.value });
  }


homereload(e){
  e.preventDefault();
  setTimeout( ()=> window.location.reload(), 1 )
  this.props.history.push("/")
  return {}

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
          {/* {console.log(this.props)} */}
          <div className='search-bar-container'>
            <form onSubmit={this.search}> <input type="text" onChange={this.update("search")} value={this.state.search} placeholder="search" className='search-bar' />  </form>
            {/* <input type="text" onChange={this.update('search')} value={this.state.search} placeholder="search" className='search-bar' /> */}

            <span className="material-symbols-outlined">search</span> 
            
          </div>
          <div className='about-and-dropdown'>
            <Link to={'/about'}> <p className="logout-button about">About Us</p></Link>
            <HeaderDropDown className="header-dropdown-button"  logout={this.logoutUser}/>
          </div>
        </div>
      );
    } else {
      return (
        <div className='link-list'>
          <div className='search-bar-container'>
            <form onSubmit={this.search}> <input type="text" onChange={this.update("search")} value={this.state.search} placeholder="search" className='search-bar' />  
            </form>
            <span className="material-symbols-outlined">search</span> 
          </div>
          {/* <Link to={'/signup'}>Signup</Link>
          <br />
          <Link to={'/login'}>Login</Link> */}
          <div className='about-and-dropdown'>
            <Link to={'/about'}> <p className="logout-button about">About Us</p></Link>
            <LoginDropdown className="header-dropdown-button" />
          </div>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="nav-bar">
        {/* <h1 className="app-name">M(ern) S(tack) Paint</h1> */}
        {/* <img onClick={() => window.location.reload(false)} className='header-logo' src="https://kernify-seed.s3.us-west-1.amazonaws.com/MSPaint.png" alt="" /> */}
        
        {/* <Link to="/">
        <img className='header-logo' src="https://kernify-seed.s3.us-west-1.amazonaws.com/MSPaint.png" alt="" />
        </Link> */}
        <img onClick={(e) => this.homereload(e)} className='header-logo' src="https://kernify-seed.s3.us-west-1.amazonaws.com/MSPaint.png" alt="" />
        <br />
        {this.getLinks()}
      </div>
    );
  }
}

export default NavBar;