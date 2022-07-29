// src/components/nav/navbar_container.js

import { connect } from 'react-redux';
import { fetchSearchPosts } from '../../actions/post_actions';
import { logout } from '../../actions/session_actions';
import { withRouter } from "react-router-dom"
import NavBar from './navbar';

const mapStateToProps = state => ({
  loggedIn: state.session.isAuthenticated
});

const mapDispatchToProps = dispatch => ({
  search: query => dispatch(fetchSearchPosts(query)),
  logout: () => dispatch(logout())
})

export default withRouter(connect( mapStateToProps, mapDispatchToProps)(NavBar));