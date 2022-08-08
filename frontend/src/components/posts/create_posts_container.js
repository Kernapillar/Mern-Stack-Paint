import { connect } from 'react-redux';
import { composePost } from '../../actions/post_actions';
import CreatePost from './create_posts';

const mapStateToProps = (state) => {
  // console.log("MSTP create post container", state)
  return {
    currentUser: state.session.user,
    newPost: state.posts.new
  };
};

const mapDispatchToProps = dispatch => {
  return {
    composePost: data => dispatch(composePost(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreatePost);