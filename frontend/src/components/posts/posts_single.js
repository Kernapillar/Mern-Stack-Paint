import React from 'react';
import './posts_single.css'
import CreatePostContainer from './create_posts_container'

class PostSingle extends React.Component {
  render() {
    return (
      <div className="post-container">
        <div className="tags">{this.props.tag}</div>
        <h3 className="post">{this.props.text}</h3>
        {console.log(this.props)}
        <button className="post-reply">reply to this post</button>
        <CreatePostContainer parent={this.props.id}/>
        {/* <h3>{this.props.imageurl}</h3> */}
      </div>
    );
  }
}

export default PostSingle;