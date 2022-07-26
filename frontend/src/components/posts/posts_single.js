import React from 'react';

class PostSingle extends React.Component {
  render() {
    return (
      <div>
        <h3>{this.props.text}</h3>
        {/* <h3>{this.props.imageurl}</h3> */}
      </div>
    );
  }
}

export default PostSingle;