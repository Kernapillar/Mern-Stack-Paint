import React from 'react';
import PostSingle from './posts_single';

class CreatePost extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
      tag: '',
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
      text: this.state.text,
      tag: this.state.tag
    };

    this.props.composePost(post);
    this.setState({ 
      text: '',
      tag: ''
    });
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
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
        </form>
        <br />
        <PostSingle text={this.state.newPost} />
      </div>
    )
  }
}

export default CreatePost;