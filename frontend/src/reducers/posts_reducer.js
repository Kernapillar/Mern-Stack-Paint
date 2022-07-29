import { RECEIVE_POSTS, RECEIVE_POST, RECEIVE_USER_POSTS, RECEIVE_NEW_POST, REMOVE_POST } from '../actions/post_actions';

const PostsReducer = (state = { all: {}, user: {}, new: undefined }, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  console.log(action);
  switch (action.type) {
    case RECEIVE_POSTS:
      newState.all = action.posts.data;
      return newState;
    case RECEIVE_USER_POSTS:
      newState.user = action.posts.data;
      return newState;
    case RECEIVE_NEW_POST:
      newState.new = action.post.data
      return newState;
    case RECEIVE_POST:
    newState["currentPost"] = action.post.data;
      return newState
    case REMOVE_POST:
      delete newState.user[action.postId];
      return newState;
    default:
      return state;
  }
};

export default PostsReducer;