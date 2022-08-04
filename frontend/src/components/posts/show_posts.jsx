import React from 'react';
import './show_posts.css';
import CanvasComponent from '../canvas/canvas';
import { Link } from 'react-router-dom';
 
class ShowPost extends React.Component {
    constructor(props) {
       super(props)
        this.handleDeleteClick = this.handleDeleteClick.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this)
        console.log("show posts header", this)
    }


    componentWillMount(){
        this.props.fetchPost(this.props.match.params.id)
            .then(console.log("componentwillmount", this.props))
        .then(this.props.fetchComments(this.props.match.params.id))
            .then(console.log("componentwillmount", this.props))
    }

    componentDidMount() {

        // this.props.fetchComments(this.props.post.currentPost._id)
        // console.log("component did mount", this.props.post.currentPost.parentUrls.concat(this.props.post.currentPost._id))
            // .then(console.log("random shit", this.props))
            console.log("random shit", this)
    }

    handleDeleteClick() {
        if (this.props.deletePost){
        // console.log("show posts delete click",this.props)
        this.props.deletePost(this.props.match.params.id);
        this.props.history.push('/profile');}
    }

    handleUpdate(){
        // console.log("handle update this props line 26",this.props.match.params.id)
        // console.log("handle update this props line 26 typeof ",typeof this.props.match.params.id)
        // console.log("handle update this props line 26 this.props", this.props)
        // console.log("handle update this props line 26 typeof ",typeof this.props.match.params.id)
        this.props.history.push(`/posts/update/${this.props.match.params.id}`)
    }

    canvasConvert() {
        let convertCanvas = document.createElement("canvas");
        convertCanvas.id = 123456789
        // console.log("convertCanvas", convertCanvas)
        convertCanvas.height = 558
        convertCanvas.width = 945
        const img1 = new Image();
        img1.crossOrigin = "anonymous"
        img1.src = `${this.props.post.currentPost.imageUrl}?${99999999}`
        // console.log("img1 src in collab", img1.src = `${this.props.post.currentPost.imageUrl}?${99999999}`)

        let ctxt = convertCanvas.getContext('2d');
        img1.onload = () => {
            ctxt.drawImage(img1, 0, 0)
            let converted = convertCanvas.toDataURL()
            // console.log("we waited")
            // console.log("we waited 110")
            // this.pause(1000)
            // console.log("we waited 112")
            window.freshurl = converted
            // console.log("window.freshurl", window.freshurl)
        }

    }

    


    render () {
        console.log("this.props.post",this.props.post)
        let fetched = false;
        if (this.props.post.currentPost && !fetched){
        // this.props.fetchComments(this.props.post.currentPost.parentUrls.concat(this.props.post.currentPost._id))
        // this.props.fetchComments(this.props.post.currentPost.parentUrls)
        // fetched = true    
        console.log("zero string",this.props.post.currentPost.parentUrls)
        }

        if (!this.props.post.currentPost) {
            return null
        } else {
            return (
                <div className='show-post-container'>
                    {console.log("this.props.post ID ",this.props.post.currentPost._id)}
                    {console.log("this.props.post parenturls",this.props.post.currentPost.parentUrls)}
                    {this.canvasConvert()}

                    {/* {fetched = fetchImage(this.props.post.currentPost.imageUrl)} */}
                    {/* {console.log("text", this.props.post.currentPost.imageUrl)} */}
                    {/* {this.getBase64ImageFromUrl(this.props.post.currentPost.imageUrl).then(result => parentUrlBlob = result, console.log("parenturlblob 89",parentUrlBlob))}  */}
                    {/*  blocked by CORS */}
                    


                    <div className='main-post-wrapper'>
                        <div className='main-post-container'>
                            {/* <h1>Title</h1> */}
                            <h1>{this.props.post.currentPost.title ? `${this.props.post.currentPost.title}` : "Title"}</h1>
                            {/* <img src={`${this.props.post.imageUrl}`} alt="post-picture" className='post-card-pic'/> */}

                            <img className='show-image' src={`${this.props.post.currentPost.imageUrl}`} alt="show picture" />
                            <h2>{this.props.post.currentPost.userName ? `Username: ${this.props.post.currentPost.userName}` :  `user_id: ${this.props.post.currentPost.user}` }</h2>
                            <h2><Link to={`/posts/colaborate/${this.props.post.currentPost.id}`}  ><button >Colaborate!</button></Link></h2>
                            <h2><button onClick={() => this.handleUpdate()} >Edit Post!</button></h2>
                            <h2><button onClick={() => this.handleDeleteClick()} >Delete Post!</button></h2>
                            <h4>
                                {this.props.post.currentPost.text}
                            </h4>
                        </div>
                        {/* this.props. */}
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