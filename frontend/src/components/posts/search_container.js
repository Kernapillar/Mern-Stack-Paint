import { connect } from 'react-redux';
import { fetchSearchPosts } from '../../actions/post_actions';
import SearchResults from './searched_posts';


const mapStateToProps = (state, ownProps) => {
  return {
    // console: console.log("searchcontainer state",state), 
    // console: console.log("searchcontainer ownprops", ownProps),
    ownProps: ownProps
    // posts: Object.values(state.posts.all)
  };
};

const mapDispatchToProps = dispatch => {
  return {

    search: query => dispatch(fetchSearchPosts(query)),

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);