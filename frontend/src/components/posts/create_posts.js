import React from 'react';
import PostSingle from './posts_single';
import CanvasComponent from '../canvas/canvas'
import { useRef } from "react";
import './create_posts.css';


class CreatePost extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
      title: "",
      tag: '',
      newPost: ""
    }

    this.canvas = null
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.canvas = document.getElementById("canvas-page-element")
    // console.log("canvas png", canvas.toDataURL())
    this.setState({ tag: "thing" })
  }

  componentWillReceiveProps(nextProps) {
    // console.log("when do we hit nextprops",nextProps)
    this.setState({ newPost: nextProps.newPost.text });
  }
  
  handleSubmit(e) {
    e.preventDefault();
    const dataURL = this.canvas.toDataURL();
    
    let post = {
      text: this.state.text,
      title: this.state.title,
      tag: this.state.tag,
      blobData:  dataURL,
      fileNum: `${Date.now()}`,
    };

    this.props.composePost(post).then(() =>this.props.history.push("/"));;
    this.setState({ 
      text: '',
      tag: '',
      title: ''
    });
    
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }


  render() {
    return (
      <div className="new-post-container">

        <form onSubmit={this.handleSubmit}>
          <div className='create-post-items'>
            <div className='canvas-drawbox'>
              <CanvasComponent parentURL={this.props.parentURL} />
            </div>


            <div className='new-post-content'>
              <input
                value={this.state.title}
                onChange={this.update("title")}
                placeholder="Add a Title to your post..."
                className='title-input' />
              <textarea
                value={this.state.text}
                onChange={this.update("text")}
                placeholder="Write your Comment..."
              className='text-input'/>
              <div className='tag-submit'>
                <select onChange={this.update("tag")} className="tag-dropdown"  >
                  <option value={"person"}>Person</option>
                  <option value={"place"} >Place</option>
                  <option value={"thing"} selected>Thing</option>
                </select>
                <input type="submit" value="Submit" className='submit-button'/>
              </div>

            </div>
          </div>
        </form>

      </div>
    )
  }
}

export default CreatePost;