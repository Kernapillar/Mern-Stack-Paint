import React from 'react';
import PostSingle from './posts_single';
import CanvasComponent from '../canvas/canvas'
import { useRef } from "react";


class CreatePost extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
      newPost: "",

    }

    this.canvas = null
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.canvas = document.getElementById("canvas-page-element")
    // console.log("canvas png", canvas.toDataURL())
  }

  componentWillReceiveProps(nextProps) {
    console.log("when do we hit nextprops",nextProps)
    this.setState({ newPost: nextProps.newPost.text });
  }
  
  handleSubmit(e) {
    e.preventDefault();
    const dataURL = this.canvas.toDataURL();
    
    let post = {
      text: this.state.text,
      blobData:  dataURL,
      fileNum: `${Date.now()}`,

    };

    this.props.composePost(post);
    this.setState({ text: '' })

  }


  update(feild) {
    return e => this.setState({
      [feild]: e.currentTarget.value
    });
  }


  render() {
    return (
      <div>

        <form onSubmit={this.handleSubmit}>


          <div>
            <CanvasComponent  />
            <input type="textarea"
              value={this.state.text}
              onChange={this.update('text')}
              placeholder="Write your Comment..."
            />
            <input type="text"
              value={this.state.imageUrl}
              onChange={this.update('imageUrl')}
              placeholder="ImageUrl..."
            />
            <input type="submit" value="Submit" />
          </div>

          <div>


          </div>
        </form>
        <br />
        <PostSingle text={this.state.newPost} />



      </div>
    )
  }
}

export default CreatePost;