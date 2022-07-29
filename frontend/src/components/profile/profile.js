import React from 'react';
import PostSingle from '../posts/posts_single';
import { Link } from 'react-router-dom';
import './profile.css'

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    }
  }

  componentWillMount() {
    this.props.fetchUserPosts(this.props.currentUser.id);
  }

  componentWillReceiveProps(newState) {
    this.setState({ posts: newState.posts });
  }

  render() {

    if (this.state.posts.length === 0) {
      return (
      <div className='profile-no-posts'>
        <h1>You have no posts yet!</h1>
        <Link to="/posts/new">
          <button className="create-post-button">
            <span>Create a Post</span>
          </button>
        </Link>
      </div>
      )
    } else {
      return (
        <div className='profile-container'>
          {/* <div className="user-section">
            <h2>Username</h2>
            <h1>A</h1>
          </div> */}
          <h1>My Posts</h1>
          <div className="post-list">
            {this.state.posts.map(post => (
              <li className='post'><PostSingle key={post._id} post={post} text={post.text} tag={post.tag} /></li>
            ))}
          </div>
          
        </div>
      );
    }
  }
}

export default Profile;