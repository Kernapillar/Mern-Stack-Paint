<<<<<<< HEAD
import { getPosts, getUserPosts, writePost, getPost } from '../util/post_api_util';
=======

import { getPosts, getUserPosts, writePost, fetchSearch } from '../util/post_api_util';
>>>>>>> search-bar

export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const RECEIVE_USER_POSTS = "RECEIVE_USER_POSTS";
export const RECEIVE_NEW_POST = "RECEIVE_NEW_POST";
export const RECEIVE_POST = "RECEIVE_POST";

export const receivePosts = posts => ({
  type: RECEIVE_POSTS,
  posts
});

export const receiveUserPosts = posts => ({
  type: RECEIVE_USER_POSTS,
  posts
});

export const receiveNewPost = post => ({
  type: RECEIVE_NEW_POST,
  post
});

export const receivePost = post => ({
  type: RECEIVE_POST,
  post
});

export const fetchPosts = () => dispatch => (
  getPosts()
    .then(posts => dispatch(receivePosts(posts)))
    .catch(err => console.log(err))
);

export const fetchUserPosts = id => dispatch => (
  getUserPosts(id)
    .then(posts => dispatch(receiveUserPosts(posts)))
    .catch(err => console.log(err))
);

export const composePost = data => dispatch => (
  writePost(data)
    .then(post => dispatch(receiveNewPost(post)))
    .catch(err => console.log(err))
);

export const fetchPost = postId => dispatch => (
  getPost(postId)
    .then(post => dispatch(receivePost(post), console.log(post)))
    )

export const fetchSearchPosts = search => dispatch => (
  fetchSearch(search)
    .then(posts => dispatch(receivePosts(posts)))
    .catch(err => console.log(err))
);

export const fetchSearchTags = search => dispatch => (
  fetchSearch(search)
    .then(posts => dispatch(receivePosts(posts)))
    .catch(err => console.log(err))
);