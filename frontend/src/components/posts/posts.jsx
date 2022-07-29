import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PostSingle from './posts_single';
import "./posts.css"

//Do this one last

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.filterTags = this.filterTags.bind(this)
  }

  componentDidMount() {
    this.props.fetchPosts().then(this.render())
  } 

  filterTags(tag){
    this.props.fetchSearchTags(tag)
  }


  render() {
      return (
        <div>
          <div className='index-sub-header'>
            <div className='tag-categories'>
              <button onClick={() => this.filterTags('Person')} className='submit-button'> Person </button>
              <button onClick={() => this.filterTags('Place')} className='submit-button'> Place</button>
              <button onClick={() => this.filterTags('Thing')} className='submit-button'> Thing</button>
            </div>
            <Link to={"/posts/new"}><button className='submit-button'> create new post</button></Link>
          </div>
            <div className="post-list">
              {/* <h2>All Posts</h2> */}
              {this.props.posts.map(post => (
             <Link to={`/posts/${post._id}`}>
                <li className='post'> <PostSingle key={post.id} post={post} text={post.text} tag={post.tag} /></li>  
             </Link> 
              ))}
            </div>

        </div>
      );
  }}
    


export default withRouter(Posts);