import React from 'react';
import './posts_single.css'

class PostSingle extends React.Component {
  render() {
    return (
      <div className="post-container">
        <div className='single-title'>
          <h3 className='post-card-title'>Title</h3>
          <h3>{" "}</h3>
        </div>
        <div className='picture-background'>
          <img src="https://mernstackdrawwizard.s3.us-west-1.amazonaws.com/1659028971443" alt="post-picture" className='post-card-pic'/>
        </div>
        
        {/* <p className="post">{this.props.text}</p> */}
        {/* {console.log(this.props)} */}
       {/* <button className="post-reply-button">reply to this post</button> */}
        {/* <h3>{this.props.imageurl}</h3> */}
        <hr />
        <div className='comments-tags'>
          <p>x comments</p>
          <div className="tags">{this.props.tag}</div>
        </div>
      </div>
    );
  }
}

export default PostSingle;