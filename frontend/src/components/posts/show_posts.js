import React from 'react';
import './show_posts.css';
 
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
        if (!this.props.post) {
            return null
        } else {
            return (
                <div className='show-post-container'>
                    <div className='main-post-wrapper'>
                        <div className='canvas-placeholder'></div>
                        <div className='main-post-container'>
                            {/* console.this.props.post */}
                            <h1>Author Name</h1>
                            <h2>Comment: </h2>
                            <span>
                                Post Comment Post CommentPost CommentPost CommentPost CommentPost CommentPost CommentPost CommentPost CommentPost CommentPost CommentPost CommentPost CommentPost CommentPost CommentPost CommentPost CommentPost CommentPost CommentPostasasasasassasasassCommentPost CommentPost CommentPost CommentPost CommentPost CommentPost CommentPost CommentPost CommentPost CommentPost CommentPost CommentPost CommentPost CommentPost CommentPost CommentPost CommentPost CommentPost Commentasasasasasasasa
                            </span>
                        </div>
                    </div>
                    <div className='replies-wrapper'>
                        <h1>Comments</h1>
                         
                    </div>
                </div>
            )
        }
    }
}
 
export default ShowPost;