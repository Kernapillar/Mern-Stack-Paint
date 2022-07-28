import React from 'react';
import './posts_single.css'

class PostSingle extends React.Component {
  render() {
    return (
      <div className="post-container">
        <h3>Title</h3>
        <img src="https://kernify-seed.s3.us-west-1.amazonaws.com/wish_you_were_here.jpg" alt="post-picture" className='post-card-pic'/>
        <div className="tags">{this.props.tag}</div>
        <p className="post">{this.props.text}</p>
        {console.log(this.props)}
       {/* <button className="post-reply-button">reply to this post</button> */}
        {/* <h3>{this.props.imageurl}</h3> */}
        <hr />
        <div className='comments-tags'>
          <p>x comments</p>
          <p>{this.props.tag} tag here</p>
        </div>
      </div>
    );
  }
}

export default PostSingle;