import { connect } from 'react-redux';
import { composePost } from '../../actions/post_actions';
import Colaborate from './colaborate_post';





const mapStateToProps = (state, ownProps) => {
  console.log("collaborate post container", ownProps)
  console.log("collaborate post container state", state)
  return {
    currentUser: state.session.user,
    newPost: state.posts.new,
    parentUrl: state.posts.currentPost.imageUrl,
    currentPost: state.posts.currentPost
  };
};

const mapDispatchToProps = dispatch => {
  return {
    composePost: data => dispatch(composePost(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Colaborate);