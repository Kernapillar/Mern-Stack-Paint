import React from 'react';
import { withRouter } from 'react-router-dom';
import PostSingle from './posts_single';
import "./posts.css"

//Do this one last

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
console.log("searched state", this.state)
console.log("searched props",this.props)
  }

  componentDidMount() {
    console.log("componentdidmount", this.props)
    // this.props.search()
  }


  render() {
      console.log("searched posts render", this.props)
      console.log("searched posts render", this.state)
      if (this.props.posts === undefined || this.props.posts.length === 0) {
      return (<div>Enter your Query above

      </div>)
    } else {

      return (
        <div className="post-list">
          {/* <h2>All Posts</h2> */}
          {this.props.posts.map(post => (
            <li className='post-placeholder'> <PostSingle key={post._id} text={post.text} tag={post.tag} /></li>
          ))}

        </div>
      );
    }

  }

}

export default withRouter(SearchResults);