import React from 'react';
import './post_reply_item.css'

class PostReplyItem extends React.Component {
    render() {    
    console.log("REPLY ITEM PROPS", this.props)
    if (!this.props.post) {return null}
    return (
      <div className="post-container">
        <div className='single-title'>
          <h3 className='post-card-title'>{this.props.post.title ? `${this.props.post.title}` : "Title"}</h3>
          <h3>{" "}</h3>
        </div>
        <div className='picture-background'>
          <img src={`${this.props.post.imageUrl}`} alt="post-picture" className='post-card-pic'/>
        </div>
        <hr />
        <div className='comments-tags'>
          <p>x comments</p>
          <div className="tags">{this.props.post.tag}</div>
        </div>
      </div>
    );
  }
}

export default PostReplyItem;