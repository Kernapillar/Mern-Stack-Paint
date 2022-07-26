import React from 'react';
import PostSingle from './posts_single';

class CreatePost extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
      newPost: ""
    }

    this.handleSubmit = this.handleSubmit.bind(this);
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