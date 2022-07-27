import React from 'react';

class PostSingle extends React.Component {
  render() {
    return (
      <div>
        <div className="tags">{this.props.tag}</div>
        <h3>{this.props.text}</h3>
        {console.log(this.props)}
        
       <button>reply to this post</button>
        {/* <h3>{this.props.imageurl}</h3> */}
      </div>
    );
  }
}

export default PostSingle;