import { connect } from 'react-redux';
import { updatePost, deletePost, fetchPost } from '../../actions/post_actions';
import EditPost from './edit_post';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  console.log("MSTP edit post container state ", state)
  console.log("MSTP edit post container ownProps ", ownProps)
  return {
    currentUser: state.session.user,
    currentPost: state.posts.currentPost,
    postId: ownProps.match.params.id
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updatePost: data => dispatch(updatePost(data)),
    deletePost: id => dispatch(deletePost(id)),
    fetchPost: id => dispatch(fetchPost(id))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditPost));