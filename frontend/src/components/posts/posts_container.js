import { connect } from 'react-redux';
import { getPosts } from '../../util/post_api_util';
import Posts from './posts';


const mapStateToProps = (state) => {
  return {
    posts: Object.values(state.posts.all)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getPosts: () => dispatch(getPosts)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);