import React from 'react';
import PostSingle from '../posts/posts_single';
import './profile.css'

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    }
  }

  componentWillMount() {
    console.log(this.props.currentUser.id)
    this.props.fetchUserPosts(this.props.currentUser.id);
  }

  componentWillReceiveProps(newState) {
    this.setState({ posts: newState.posts });
  }

  render() {
    if (this.state.posts.length === 0) {
      return (<div>This user has no Posts</div>)
    } else {
      return (
        <div className='profile-container'>
          <div className="user-section">
            <h2>Username</h2>
            <h1>A</h1>
          </div>

          
          {this.state.posts.map(post => (
            <PostSingle key={post._id} post={post} text={post.text} tag={post.tag} />
          ))}
        </div>
      );
    }
  }
}

export default Profile;