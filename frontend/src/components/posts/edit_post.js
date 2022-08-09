import React from 'react';
import PostSingle from './posts_single';
import CanvasComponent from '../canvas/canvas'
import { useRef } from "react";
import './create_posts.css';


class EditPost extends React.Component {
  constructor(props) {
    super(props);
    if (this.props.currentPost) {
        this.state = {
          text: this.props.currentPost.text,
          tag: this.props.currentPost.tag,
          blobData: "",
          errors: {}
        }
      } else {
        this.state = {
          text: '',
          tag: '',
          blobData: "",
          errors: {}
        }
    }
    this.canvas = null
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
  }

  // componentWillMount(){
  //   this.props.fetchPost(this.props.postId).then( console.log("componentwillmount",this.props) )
  //   // this.props.fetchPost(this.props.postId).then( await this.props.currentPost, console.log("componentwillmount",this.props) )
  // }

  componentDidMount() {
    this.canvas = document.getElementById("canvas-page-element")
    // console.log("component mount", this.props)
  }
//   componentDidUpdate(nextprops){
//     console.log("when did update fire", nextprops)
//   }

//   componentWillReceiveProps(nextProps) {
//     console.log("when do we hit nextprops",nextProps)
// //     this.setState({ newPost: nextProps.newPost.text });
//   }
  
  handleSubmit(e) {
    e.preventDefault();
    // console.log("submit start from edit post", this.props.post)
    // console.log("submit start from edit post", this.state)
    const dataURL = this.canvas.toDataURL();
    // console.log("",dataURL)
    let post = {
      text: this.state.text,
      tag: this.state.tag,
      fileNum: `${Date.now()}`,
      id: this.props.postId,
      blobData:  dataURL

    };
    if (this.state.text === '') {
      this.state.errors.text = 'A comment is required to submit your post';
    } else {
      delete this.state.errors.text;
    }

    if (this.state.title === '') {
      this.state.errors.title = 'A title is required to submit your post';
    } else {
      delete this.state.errors.title;
    }

    this.forceUpdate();

    if (!this.state.errors.text && !this.state.errors.title) {
      this.props.updatePost(post).then(() =>this.props.history.push("/profile"));;
      this.setState({
        text: '',
        tag: '',
        title: ''
      });
    }
    
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
    // console.log("line 76 this.props ",this.props);
    return (
      <div className="new-post-container">

        <form onSubmit={this.handleSubmit}>
        <div className='create-post-items'>
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
        <button onClick={() => this.handleDeleteClick()} className="delete-button">Delete post</button>
            {/* <PostSingle text={this.state.newPost} /> */}
          </div>
          </div>
        </form>
      </div>
    )
  }
}

export default EditPost;