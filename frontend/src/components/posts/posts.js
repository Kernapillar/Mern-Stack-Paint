import React from 'react';
import { withRouter } from 'react-router-dom';
import PostSingle from './posts_single';


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
      return (<div>There are no Posts

        <img src="https://mernstackpaint.s3.us-west-1.amazonaws.com/1658960875412.png" ></img>

      </div>)
    } else {
      return (
        <div>
          <h2>All Posts</h2>
          {this.state.posts.map(post => (
            <PostSingle key={post._id} text={post.text} />
          ))}

        </div>
      );
    }
  }
}

export default withRouter(Posts);