import React from 'react';
import './show_posts.css';
import CanvasComponent from '../canvas/canvas';
import { Link } from 'react-router-dom';
 
class ShowPost extends React.Component {
    constructor(props) {
       super(props)
    }

    componentDidMount() {
        this.props.fetchPost(this.props.match.params.id)
            .then(console.log("random shit", this.props))
    }


    render () {
        console.log("this.props.post",this.props.post)
        // console.log("text", this.props.post.currentPost)
        if (!this.props.post.currentPost) {
            return null
        } else {
            return (
                <div className='show-post-container'>
                    <div className='main-post-wrapper'>
                        <div className='main-post-container'>
                            {/* <h1>Title</h1> */}
                            <h1>{this.props.post.currentPost.title ? `${this.props.post.currentPost.title}` : "Title"}</h1>
                            {/* <img src={`${this.props.post.imageUrl}`} alt="post-picture" className='post-card-pic'/> */}

                            <img className='show-image' src={`${this.props.post.currentPost.imageUrl}`} alt="show picture" />
                            <h2>{this.props.post.currentPost.userName ? `Username: ${this.props.post.currentPost.userName}` :  `user_id: ${this.props.post.currentPost.user}` }</h2>
                            <h2><Link to={`/posts/colaborate/${this.props.post.currentPost.id}`}  ><button >Colaborate!</button></Link></h2>
                            <h4>
                                {this.props.post.currentPost.text}
                            </h4>
                        </div>
                        <h3>Comment: </h3>
                        <div className='comments-wrapper'>
                            <h1>username</h1>
                            <h2>
                                <div className='canvas-medium'>
                                    <img src={`${this.props.post.currentPost.imageUrl}`} alt="" />
                                </div>
                                <div className='comment-reply'>{this.props.post.currentPost.text}</div>
                            </h2>
                        </div>

                        <div className='comments-wrapper'>
                            <h1>username</h1>
                            <h2>
                                <div className='canvas-medium'>
                                    <img src={`${this.props.post.currentPost.imageUrl}`} alt="" />
                                </div>
                                <div className='comment-reply'>{this.props.post.currentPost.text}</div>
                            </h2>
                        </div>
                    </div>
                    {/* <div className='replies-wrapper'>
                        <h1>Comments</h1>
                         
                    </div> */}
                </div>
            )
        }
    }
}
 
export default ShowPost;