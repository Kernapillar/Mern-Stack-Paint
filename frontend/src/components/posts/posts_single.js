import React from 'react';
import './posts_single.css'

class PostSingle extends React.Component {
  render() {
    return (
      <div className="post-container">
        <div className="tags">{this.props.tag}</div>
        <h3 className="post">{this.props.text}</h3>
        {console.log(this.props)}
       <button className="post-reply-button">reply to this post</button>
        {/* <h3>{this.props.imageurl}</h3> */}
      </div>
    );
  }
}

export default PostSingle;