import React from 'react';
import { withRouter } from 'react-router-dom';
import PostSingle from './posts_single';
import "./posts.css"

//Do this one last

class Posts extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.fetchPosts()
  } 


  render() {
    if (this.props.posts.length === 0) {
      return (<div>There are no Posts
  
      </div>)
    } else {

      return (
        <div className="post-list">
          {/* <h2>All Posts</h2> */}
          {this.props.posts.map(post => (
          <li className='post-placeholder'> <PostSingle key={post._id} text={post.text} tag={post.tag} /></li>  
          ))}

        </div>
      );
  }}
    
}

export default withRouter(Posts);