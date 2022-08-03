import React from 'react';
import PostSingle from './posts_single';
import CanvasComponent from '../canvas/canvas'
import { useRef } from "react";
import './create_posts.css';


class EditPost extends React.Component {
  constructor(props) {
    super(props);
    console.log("edit post")

    if (this.props.post) {
        this.state = {
          text: this.props.post.text,
          tag: this.props.post.tag,
          blobData: ""
        
        }
    } else {
        this.state = {
            text: '',
            tag: '',
            blobData: ""
        }
    }
    this.canvas = null
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
  }

  componentDidMount() {
    this.canvas = document.getElementById("canvas-page-element")
    console.log("component mount", this.props)
    // this.props.fetchPost(this.props.postId)
  }

//   componentWillReceiveProps(nextProps) {
//     console.log("when do we hit nextprops",nextProps)
//     this.setState({ newPost: nextProps.newPost.text });
//   }
  
  handleSubmit(e) {
    e.preventDefault();
    console.log("submit start from edit post")
    const dataURL = this.canvas.toDataURL();
    console.log("",dataURL)
    let post = {
      text: this.state.text,
      tag: this.state.tag,
      fileNum: `${Date.now()}`,
      id: this.props.postId,
      blobData:  dataURL

    };

    this.props.updatePost(post).then(() =>this.props.history.push("/profile"));;
    // this.setState({  text: '', tag: '' });
    
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleDeleteClick() {
    this.props.deletePost(this.props.postId);
    this.props.history.push('/profile');
  }


  render() {
    console.log(this.props);
    return (
      <div className="new-post-container">

        <form onSubmit={this.handleSubmit}>
          <div className='canvas-drawbox'>
            {/* <CanvasComponent  /> */}
            <CanvasComponent key={this.props.postId} parentURL={window.freshurl} />
          </div>


          <div className='new-post-content'>
            <textarea
              value={this.state.text}
              onChange={this.update("text")}
              placeholder="Write your Comment..."
            className='text-input'/>
            <div className='tag-submit'>
              <select onChange={this.update("tag")} className="tag-dropdown">
                <option value={"person"}>Person</option>
                <option value={"place"}>Place</option>
                <option value={"thing"}>Thing</option>
                {/* <option value={this.state.tag}>tag1</option>
                <option value={this.state.tag}>tag2</option>
                <option value={this.state.tag}>tag3</option> */}
              </select>
              <input type="submit" value="Submit" className='submit-button'/>
            </div>
            {/* <PostSingle text={this.state.newPost} /> */}
          </div>
        </form>
        <button onClick={() => this.handleDeleteClick()}>Delete post</button>
      </div>
    )
  }
}

export default EditPost;