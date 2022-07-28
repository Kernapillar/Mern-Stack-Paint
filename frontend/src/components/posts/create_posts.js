import React from 'react';
import PostSingle from './posts_single';
import CanvasComponent from '../canvas/canvas'
import { useRef } from "react";


class CreatePost extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
      newPost: "",
      imageUrl: ""
    }

    this.canvas = null
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.canvas = document.getElementById("canvas-page-element")
    // console.log("canvas png", canvas.toDataURL())
  }

  componentWillReceiveProps(nextProps) {
    console.log("when do we hit nextprops",nextProps)
    this.setState({ newPost: nextProps.newPost.text });
  }

//   dataURItoBlob(dataURI) {
//   var binary = atob(dataURI.split(',')[1]);
//   var array = [];
//   for (var i = 0; i < binary.length; i++) {
//     array.push(binary.charCodeAt(i));
//   }
//   return new Blob([new Uint8Array(array)], { type: 'image/png' });
// }

 dataURItoBlob(dataURI) {
  // convert base64/URLEncoded data component to raw binary data held in a string
  var byteString;
  if (dataURI.split(',')[0].indexOf('base64') >= 0)
    byteString = atob(dataURI.split(',')[1]);
  else
    byteString = unescape(dataURI.split(',')[1]);

  // separate out the mime component
  var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

  // write the bytes of the string to a typed array
  var ia = new Uint8Array(byteString.length);
  for (var i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }

  return new Blob([ia], { type: mimeString });
}


dataURLtoFile(dataurl, filename) {
  var arr = dataurl.split(','),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]),
    n = bstr.length,
    u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: mime });
  }
  
  handleSubmit(e) {
    e.preventDefault();
    


    const dataURL = this.canvas.toDataURL();
    var data = atob(dataURL.substring("data:image/png;base64,".length)),
      asArray = new Uint8Array(data.length);

    for (var i = 0, len = data.length; i < len; ++i) {
      asArray[i] = data.charCodeAt(i);
    }

    const blob7 = new Blob([asArray.buffer], { type: "image/png" });

    console.log("blob 7", blob7)
    console.log("blob 7 typeof", typeof blob7)


    window.file = (this.dataURLtoFile(dataURL, 'testfile.png'))
    const file1 = this.dataURLtoFile(dataURL, 'testfile.png')
    console.log("file1",file1)
    console.log("file1 typeof", typeof file1)
    
    
    const imagetest = new Image()
    imagetest.src = this.canvas.toDataURL("image/png");
    console.log("imagetest",imagetest)
    console.log("imagetest typeof", typeof imagetest)


    var dataUrl = this.canvas.toDataURL();


    var blobData = this.dataURItoBlob(dataUrl);
    console.log("blobdata ",blobData)
    console.log("blobdata typeof", typeof blobData)
    
    // var dataUrl1 = this.canvas.toDataURL("image/png");
    // const base64Response = fetch(`data:image/jpeg;base64,${dataUrl1}`);
    // const blob1 = base64Response.blob(); 
    //   console.log("blob1",blob1)
    //   console.log("blob1 typeof", typeof blob1)
    
 const canvastoblob = this.canvas.toBlob(blob => {
   let post = {
     text: this.state.text,
     
     // blobData: imagetest,
     blobData:  dataURL,
     //  blobData: canvastoblob,
     // blobData: blobData, 
    //  blobData: blob, 
    //  blobData: window.file, 
     // blobData:  file1,
     // blobData: blob1, 
     fileNum: `${Date.now()}.png`,
     imageUrl: ""
    };
   console.log("canvastoblob blob", blob)
   console.log("canvastoblob blob typeof ", typeof blob)
    this.props.composePost(post);
    this.setState({ text: '' })

 }, "image/png",)
 console.log("canvastoblob",canvastoblob)
 console.log("canvastoblob", typeof canvastoblob)





    const dataUrl2 = async() => { 
      console.log("are we here")
      const dataUrl1 = this.canvas.toDataURL();
      console.log("are we here 2", dataUrl1)
      // const base64Response = fetch(`data:image/png;base64,${dataUrl1}`);
      const base64Response = fetch(dataUrl1)
      console.log("base64response", base64Response)
      console.log("base64 response new",typeof base64Response)

      // const blob1 = await base64Response.blob(); 
      // const blob1 = new Blob(base64Response)  
      const blob1 = await base64Response.then(res => res.blob()); 

      console.log("are we here 4")
      console.log("are we here 5", blob1)
      console.log("are we here 6", typeof blob1)
      console.log("when does this fire within async")
      return blob1
  }
   
  dataUrl2().then((blob1)=> {
    console.log("blob1",blob1)
    console.log("blob1 typeof", typeof blob1)

    

      let post = {
        text: this.state.text,

        // blobData: imagetest,
        // blobData:  dataURL,
        //  blobData: canvastoblob,
        // blobData: blobData, 
        blobData: blob7, 
        // blobData:  file1,
        // blobData: blob1, 
        fileNum: `${Date.now()}.png`,
        imageUrl: ""
      };

      this.props.composePost(post);
      this.setState({ text: '' })
  } )




    // typeofobject



  
  console.log("when does this fire outside async")


// https://javascript.plainenglish.io/file-upload-to-amazon-s3-using-node-js-42757c6a39e9
// Maybe if the createpost page handles the s3 upload, and the after the async function returns the promise from the function 



    // let post = {
    //   text: this.state.text,
    //   // imageUrl: this.state.imageUrl,
    //   blobData: imagetest, 
    //   // blobData: blobData, 
    //   // blobData: base64data, 
    //   // blobData: blob1, 
    //   fileNum: Date.now()

    // };
    

    // console.log("canvas png", this.canvas.toDataURL("image/png"))
    // console.log("blobData", blobData)
    // console.log("blobData typeof ", typeof blobData)
    // // typeofobject


    // this.props.composePost(post);
    // this.setState({ text: '' })

  }


//alex alt
  // handleSubmit(e) {
  //   e.preventDefault();
  //   let post = {
  //     text: this.state.text
  //   };
  //   this.props.composePost(post);
  //   this.setState({ text: '' })
  //   const dataURL = this.canvas.toDataURL();
  //   window.file = (this.dataURLtoFile(dataURL, 'testfile.png'))
  // }
  // dataURLtoFile(dataurl, filename) {
  //   var arr = dataurl.split(','),
  //     mime = arr[0].match(/:(.*?);/)[1],
  //     bstr = atob(arr[1]),
  //     n = bstr.length,
  //     u8arr = new Uint8Array(n);
  //   while (n--) {
  //     u8arr[n] = bstr.charCodeAt(n);
  //   }
  //   return new File([u8arr], filename, { type: mime });
  // }




  update(feild) {
    return e => this.setState({
      [feild]: e.currentTarget.value
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
              onChange={this.update('text')}
              placeholder="Write your Comment..."
            />
            <input type="text"
              value={this.state.imageUrl}
              onChange={this.update('imageUrl')}
              placeholder="ImageUrl..."
            />
            <input type="submit" value="Submit" />
          </div>

          <div>

          


          </div>
        </form>
        <br />
        <PostSingle text={this.state.newPost} />



      </div>
    )
  }
}

export default CreatePost;