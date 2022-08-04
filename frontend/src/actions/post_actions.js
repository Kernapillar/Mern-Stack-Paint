import { getPosts, getUserPosts, writePost, changePost, destroyPost, getPost, fetchSearch, fetchCommentChildren } from '../util/post_api_util';

export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const RECEIVE_POST = "RECEIVE_POST";
export const RECEIVE_USER_POSTS = "RECEIVE_USER_POSTS";
export const RECEIVE_NEW_POST = "RECEIVE_NEW_POST";
export const REMOVE_POST = "REMOVE_POST";

export const receivePosts = posts => ({
  type: RECEIVE_POSTS,
  posts
});

export const receiveComments = posts => ({
  type: RECEIVE_COMMENTS,
  posts
});

export const receivePost = post => ({
  type: RECEIVE_POST,
  post
});

export const receiveUserPosts = posts => ({
  type: RECEIVE_USER_POSTS,
  posts
});

export const receiveNewPost = post => ({
  type: RECEIVE_NEW_POST,
  post
});

export const removePost = postId => ({
  type: REMOVE_POST,
  postId
});

export const fetchPosts = () => dispatch => (
  getPosts()
    .then(posts => dispatch(receivePosts(posts)))
    .catch(err => console.log(err))
);

export const fetchComments = (query) => dispatch => (
  console.log("query data", query),
  fetchCommentChildren(query)
    .then(posts => dispatch(receiveComments(posts)))
    .catch(err => console.log(err))
);

export const fetchUserPosts = id => dispatch => (
  getUserPosts(id)
    .then(posts => dispatch(receiveUserPosts(posts)))
    .catch(err => console.log(err))
);

export const fetchPost = id => dispatch => (
  getPost(id)
    .then(post => dispatch(receivePost(post)))
    .catch(err => console.log(err))
);

// export const fetchPost = postId => dispatch => (
//   getPost(postId)
//     .then(post => dispatch(receivePost(post), console.log(post)))
//     )

export const composePost = data => dispatch => (
  writePost(data)
    .then(post => dispatch(receiveNewPost(post)))
    .catch(err => console.log(err))
);


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
export const updatePost = data => dispatch => (
  // console.log("line 76 post actions", data),
  changePost(data)
    .then(post => dispatch(receivePost(post)))
    .catch(err => console.log(err))
);

export const deletePost = id => dispatch => (
  destroyPost(id)
    .then(post => dispatch(removePost(post._id)))
    .catch(err => console.log(err))
)
