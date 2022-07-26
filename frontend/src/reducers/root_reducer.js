// src/reducers/root_reducer.js

import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from "./errors_reducer"
<<<<<<< HEAD
// import comments from "./"

const RootReducer = combineReducers({
   errors,
   session

=======
import posts from './posts_reducer';

const RootReducer = combineReducers({
   errors,
   session,
   posts
>>>>>>> 641e4d5 (main update branch with post auth debugged)
});

export default RootReducer;