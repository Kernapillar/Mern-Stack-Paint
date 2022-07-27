import React from 'react';
import { withRouter } from 'react-router-dom';
import PostSingle from './posts_single';
import "./posts.css"

//Do this one last

class Posts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    }
  }

  componentWillMount() {
    this.props.getPosts();
  }

  componentWillReceiveProps(newState) {
    this.setState({ posts: newState.posts });
  }

  render() {
    if (this.state.posts.length === 0) {
      return (
        <div className="posts-container">
          {/* There are no Posts */}
          <ul className="post-list">
            <li className="post-placeholder">1</li>
            <li className="post-placeholder">2</li>
            <li className="post-placeholder">3</li>
            <li className="post-placeholder">4</li>
            <li className="post-placeholder">5</li>
            <li className="post-placeholder">6</li>
            <li className="post-placeholder">7</li>
            <li className="post-placeholder">8</li>
            <li className="post-placeholder">9</li>
          </ul>
        </div>
      )
    } else {
      return (
        <div className="posts-container">
          <h2>All Posts</h2>
          {this.state.posts.map(post => (
            <PostSingle key={post._id} text={post.text} tag={post.tag} />
          ))}
        </div>
      );
    }
  }
}

export default withRouter(Posts);