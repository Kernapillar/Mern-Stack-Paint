import React from 'react';
import './show_posts.css'

class PostReplyItem extends React.Component {
    render() {    
    // console.log("REPLY ITEM PROPS", this.props)
    if (!this.props.post) {return null}
    return (

        <div className='comments-wrapper'>
            <h1>{this.props.post.userName}</h1>
            <h2>
                 <div className='post-card-title'>{this.props.post.title ? `${this.props.post.title}` : "Title"}</div>
                <div className='canvas-medium'>
                    <img src={`${this.props.post.imageUrl}`} alt="" />
                </div>
                <div className='comment-reply'>{this.props.post.text}</div>
            </h2>
        </div>
    );
  }
}


export default PostReplyItem;