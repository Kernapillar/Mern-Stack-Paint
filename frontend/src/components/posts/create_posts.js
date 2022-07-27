import React from 'react';
import PostSingle from './posts_single';
import CanvasComponent from '../canvas/canvas'
import { useRef } from "react";

class CreatePost extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
      tag: '',
      // newPost: "",
      parent: this.props.parent ? this.props.parent : ''
    }
  
    this.canvas = null
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.canvas = document.getElementById("canvas-page-element")
    // console.log("canvas png", canvas.toDataURL())
  }

  // componentWillReceiveProps(nextProps) {
  //   this.setState({ newPost: nextProps.newPost.text });
  // }

  handleSubmit(e) {
    e.preventDefault();
    this.props.composePost(this.state);
    this.setState({ 
      text: '',
      tag: '',
      parent: ''
    });
  }
  
  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }
  
  
  render() {
    console.log("create post state",this.state);
    return (
      <div>

        <form onSubmit={this.handleSubmit}>


          <div>
            <CanvasComponent  />
            <input type="textarea"
              value={this.state.text}
              onChange={this.update("text")}
              placeholder="Write your Comment..."
            />
            <select onChange={this.update("tag")}>
              <option value={1}>tag1</option>
              <option value={2}>tag2</option>
              <option value={3}>tag3</option>
              {/* <option value={this.state.tag}>tag1</option>
              <option value={this.state.tag}>tag2</option>
              <option value={this.state.tag}>tag3</option> */}
            </select>
            <input type="submit" value="Submit" />
          </div>

          <div>

        


          </div>
        </form>
        <br />
        {/* <PostSingle text={this.state.newPost} /> */}
      </div>
    )
  }
}

export default CreatePost;