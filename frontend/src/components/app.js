// src/components/app.js

import React from 'react';
import { Route } from 'react-router-dom'
import { AuthRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';

import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import PostsContainer from './posts/posts_container';
import CreatePostContainer from './posts/create_posts_container';
import ProfileContainer from "./profile/profile_container"

const App = () => (
  <div>
    <NavBarContainer />
    <Switch>
      <Route exact path="/" component={PostsContainer} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <Route exact path="/posts/new" component={CreatePostContainer} />
      <Route exact path="/profile" component={ProfileContainer} />

    </Switch>
  </div>
);

export default App;