import { connect } from 'react-redux';
import { fetchPost, deletePost, fetchComments } from '../../actions/post_actions';
import ShowPost from './show_posts';
import { withRouter } from 'react-router-dom';
 
const mapStateToProps = (state, ownProps) => {
    // console.log("state", state)
    // console.log("ownProps", ownProps)
   return {
        post: state.posts,
        currentUser: state.session.user.id
   }
};
 
const mapDispatchToProps = dispatch => {
    return {
        fetchPost: (id) => dispatch(fetchPost(id)),
        deletePost: id => dispatch(deletePost(id)),
        fetchComments: (query) => dispatch(fetchComments(query))
    }
}
 
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ShowPost));