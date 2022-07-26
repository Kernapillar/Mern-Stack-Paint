import React from 'react';
import './posts_single.css'

class PostSingle extends React.Component {
  render() {
 
    return (
      <div className="post-container">
        <div className='single-title'>
          <h3 className='post-card-title'>{this.props.post.title ? `${this.props.post.title}` : "Title"}</h3>
          <h3>{" "}</h3>
        </div>
        <div className='picture-background'>
          <img src={`${this.props.post.imageUrl}`} alt="post-picture" className='post-card-pic'/>
          {/* <img src={this.props.post.imageURL ? `${this.props.imageURL}` : "https://mernstackdrawwizard.s3.us-west-1.amazonaws.com/1659030472215"} alt="post-picture" className='post-card-pic'/> */}
        </div>
        
        {/* <p className="post">{this.props.text}</p> */}
        {/* {console.log(this.props)} */}
       {/* <button className="post-reply-button">reply to this post</button> */}
        {/* <h3>{this.props.imageurl}</h3> */}
        <hr />
        <div className='comments-tags'>
          {/* <p>x comments</p> */}
          {/* <h2 className='tag-placeholder'>Author: &nbsp;</h2> */}
          <h2 className='username'>{this.props.post.userName} </h2>
          &nbsp;
          {/* <h2 className="tag-placeholder">Tag: &nbsp;</h2> */}
          <div className="tags">{this.props.tag}</div>
        </div>
      </div>
    );
  }
}

export default PostSingle;