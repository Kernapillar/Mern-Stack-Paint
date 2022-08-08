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

  postsRender () {
    if (this.props.posts.length === 0) {
      return (<h1>No Matching Posts</h1>) 
    } else {
      return (
        <>
          {this.props.posts.map(post => (
          <Link to={`/posts/${post._id}`} key={`post-link-${post._id}`}>
              <li className='post' key={`post-item-${post.id}`}> <PostSingle key={post.id} post={post} text={post.text} tag={post.tag} /></li>  
          </Link> 
          ))}
        
        </>
      )
    }
    
    
  }


  render() {
      return (
        <div>
          <div className='index-sub-header'>
            <div className='tag-categories'>
              <button onClick={() => this.filterTags('person')} className='submit-button'> Person </button>
              <button onClick={() => this.filterTags('place')} className='submit-button'> Place</button>
              <button onClick={() => this.filterTags('thing')} className='submit-button'> Thing</button>
            </div>
            <Link to={"/posts/new"}><button className='submit-button'> create new post</button></Link>
          </div>
            <div className="post-list">
              {/* <h2>All Posts</h2> */}
              {this.postsRender()}
              
            </div>
        </div>
      );
  }}
    


export default withRouter(Posts);