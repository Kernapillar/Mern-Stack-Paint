import React from 'react';
import PostSingle from './posts_single';
import CanvasComponent from '../canvas/canvas';

class CreatePost extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
      newPost: ""
    }
  
    this.canvas = null
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.canvas = document.getElementById("canvas-page-element")
    // console.log("canvas png", canvas.toDataURL())
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps)
    this.setState({ newPost: nextProps.newPost.text });
  }

  handleSubmit(e) {
    e.preventDefault();
    let post = {
      text: this.state.text
    };

    this.props.composePost(post);
    this.setState({ text: '' })
    console.log("canvas png", this.canvas.toDataURL())

  }

  update() {
    return e => this.setState({
      text: e.currentTarget.value
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
              onChange={this.update()}
              placeholder="Write your Comment..."
            />
            <input type="submit" value="Submit" />
          </div>
        </form>
        <br />
        <PostSingle text={this.state.newPost} />
      </div>
    )
  }
}

export default CreatePost;