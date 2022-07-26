import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import jwt_decode from 'jwt-decode';
import { setAuthToken } from './util/session_api_util';
import { logout } from './actions/session_actions';
import './index.css';
import * as test from "./actions/post_actions";

import axios from "axios";
// import { search } from '../../routes/api/posts';
import { fetchSearch } from './util/post_api_util'
import { fetchSearchPosts, fetchComments } from './actions/post_actions';

document.addEventListener('DOMContentLoaded', () => {
  let store;

  if (localStorage.jwtToken) {
    setAuthToken(localStorage.jwtToken);

    const decodedUser = jwt_decode(localStorage.jwtToken);
    const preloadedState = { session: { isAuthenticated: true, user: decodedUser } };
    store = configureStore(preloadedState);
    const currentTime = Date.now() / 1000;
    if (decodedUser.exp < currentTime) {
      store.dispatch(logout());
      window.location.href = '/login';
    }
  } else {
    store = configureStore({});
  }
  

  window.axios = axios
  window.store = store
  window.fetchSearchPosts = fetchSearchPosts()
  window.fetchComments = fetchComments()
  
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});