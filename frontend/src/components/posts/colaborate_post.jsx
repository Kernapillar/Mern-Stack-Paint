import React from 'react';
import PostSingle from './posts_single';
import CanvasComponent from '../canvas/canvas'
import { useRef } from "react";
import './create_posts.css';


class Colaborate extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
      title: "",
      tag: '',
      newPost: ""
    }

    this.canvas = null
    this.handleSubmit = this.handleSubmit.bind(this);
  }






  componentDidMount() {
    this.canvas = document.getElementById("canvas-page-element")
    console.log("when this.componentDidMount")
    // console.log("canvas png", canvas.toDataURL())
  }

  componentWillReceiveProps(nextProps) {
    console.log("when do we hit nextprops",nextProps)
    this.setState({ newPost: nextProps.newPost.text });
  }
  
  handleSubmit(e) {
    e.preventDefault();
    const dataURL = this.canvas.toDataURL();
    
    let post = {
      text: this.state.text,
      title: this.state.title,
      blobData:  dataURL,
      fileNum: `${Date.now()}`,
      parentUrls: this.props.currentPost.parentUrls.concat(this.props.currentPost._id)
    };

    this.props.composePost(post).then(() =>this.props.history.push("/"));;
    this.setState({ 
      text: '',
      tag: '',
      title: ''
    });
    
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  // fetchImage = async () => {
  //   const res = await fetch(this.props.parentUrl);
  //   const imageBlob = await res.blob();
  //   const imageObjectURL = URL.createObjectURL(imageBlob);
  //   return imageObjectURL;
  // };

  // fileReadImage (){
  //   let img = new Image();
  //   img.src = this.props.parentUrl;
  //   console.log("what is img", img)
  //   console.log("what is img typeof", typeof img)
  //   const imgfile = createImageBitmap(img)
  //   const imgfile1 = createImageBitmap(img).then(res => console.log("what is res",res))
  //   console.log("what is imagefile", imgfile)
  //   console.log("what is imagefile typeof", typeof imgfile)
  //   console.log("what is imagefile1", imgfile1)
  //   console.log("what is imagefile 1 typeof", typeof imgfile1)
  //   let reader = new FileReader();
  //   // let url = reader.readAsDataURL(imgfile);
  //   // console.log("url line 78", url)
  //   // isnt a blob, so it doesnt convert...?
  // }

  //  pause = (timeout) => new Promise(resolve => setTimeout(resolve, timeout))


  // canvasConvert(){
  //   let convertCanvas = document.createElement("canvas");
  //    convertCanvas.id =123456789
  //   console.log("convertCanvas", convertCanvas)
  //    convertCanvas.height = 558
  //      convertCanvas.width = 945 
  //   const img1 = new Image();
  //   img1.crossOrigin = "anonymous"
  //   img1.src = `${this.props.parentUrl}?${99999999}`
  //   console.log("img1 src in collab",img1.src = `${this.props.parentUrl}?${99999999}`)

  //   let ctxt = convertCanvas.getContext('2d');
  //   img1.onload = () => { 
  //     ctxt.drawImage(img1, 0, 0)
  //     let converted = convertCanvas.toDataURL()
  //     console.log("we waited")
  //     console.log("we waited 110")
  //     // this.pause(1000)
  //     console.log("we waited 112")
  //     window.freshurl = converted
  //     console.log("window.freshurl",window.freshurl)
  //   }
    
  // }
  
  
  render() {
    // this.fileReadImage() -- if I try to chain a .then, it doesn't fulfill becaue CORS I think
    console.log("ParentUrl collaborate post",this.props.parentUrl)
    // let converted = this.canvasConvert()

    // let parenturl = getBase64Image(this.props.parentURL)
    // this.fetchImage()
    // console.log("parenturl ", parenturl) -- also CORS blocked


// converted.onload = () => { console.log("converted", converted)}

  
if (!window.freshurl) { return null } else{
  // console.log(window.freshurl)

    return (
      <div className="new-post-container">
      {/* {this.canvasConvert()} */}
        <form onSubmit={this.handleSubmit}>
          <div className='canvas-drawbox'>
            {console.log( "concat collaborate post", this.props.currentPost.parentUrls.concat(this.props.currentPost._id))}
            <CanvasComponent key={this.props.parentUrl} parentURL={window.freshurl} />
          </div>


          <div className='new-post-content'>
            <textarea
              value={this.state.title}
              onChange={this.update("title")}
              placeholder="Add a Title to your post..."
              className='title-input' />
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
              </select>
              <input type="submit" value="Submit" className='submit-button'/>
            </div>

          </div>
        </form>

      </div>
    )
  }
  }
}

export default Colaborate;