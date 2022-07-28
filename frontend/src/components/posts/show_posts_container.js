import { connect } from 'react-redux';
import { fetchPost } from '../../actions/post_actions';
import ShowPost from './show_posts';
import { withRouter } from 'react-router-dom';
 
const mapStateToProps = (state, ownProps) => {
    console.log("state", state)
    console.log("ownProps", ownProps)
   return {
       post: state.posts
   }
};
 
const mapDispatchToProps = dispatch => {
    return {
        fetchPost: (id) => dispatch(fetchPost(id))
    }
}
 
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ShowPost));