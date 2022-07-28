// import { Buffer } from 'node:buffer';
const express = require("express");
const router = express.Router();
const passport = require('passport');
const multer = require('multer')              // multer will be used to handle the form data.
const aws = require('aws-sdk')                // aws-sdk library will used to upload image to s3 bucket.  
// require("dotenv/config");                      // from dotenv
require("dotenv").config();                      // from dotenv


const validatePostInput = require('../../validation/post');
const Post = require('../../models/Post')
const mongoose = require('mongoose');



// const jwt = require('jsonwebtoken');



router.get("/test", (req, res) => {
  res.json({ msg: "this is the testing route Posts" }) } )  ;
  
  router.get('/', (req, res) => {
    Post.find()
    .sort({ date: -1 })
    .then(posts => res.json(posts))
    .catch(err => res.status(404).json({ nopostsfound: 'No Posts found' }));
  });
  
  router.get('/user/:user_id', (req, res) => {
    Post.find({ user: req.params.user_id })
    .sort({ date: -1 })
    .then(posts => res.json(posts))
    .catch(err =>
      res.status(404).json({ nopostsfound: 'No Posts found from that user' }
      )
      );
    });
    
    router.get('/:id', (req, res) => {
      Post.findById(req.params.id)
      .then(post => res.json(post))
      .catch(err =>
        res.status(404).json({ nopostsfound: 'No Post found with that ID' })
        );
      });
      

      aws.config.update({
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,              // accessKeyId that is stored in .env file
      secretAccessKey: process.env.AWS_ACCESS_KEY_SECRET,       // secretAccessKey is also store in .env file
      region: 'us-west-1',
      // AWS_SDK_LOAD_CONFIG: 1
      })
      
      const s3 = new aws.S3({
        region: 'us-west-1',
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,              // accessKeyId that is stored in .env file
        secretAccessKey: process.env.AWS_ACCESS_KEY_SECRET ,      // secretAccessKey is also store in .env file  
      })
      


      const storage = multer.memoryStorage({
        destination: function (req, file, cb) {
          cb(null, '')
        }
      })
      const filefilter = (req, file, cb) => {
        if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
          cb(null, true)
        } else {
          cb(null, false)
        }
      }
      const upload = multer({ storage: storage, fileFilter: filefilter });

      // const upload = multer({ storage: storage});

      // Now creating the S3 instance which will be used in uploading photo to s3 bucket.

//       const s3 = new aws.S3({
//         accessKeyId: process.env.AWS_ACCESS_KEY_ID,              // accessKeyId that is stored in .env file
//         secretAccessKey: process.env.AWS_ACCESS_KEY_SECRET       // secretAccessKey is also store in .env file
//       })



// router.post('/', upload.single('imageUrl'), 
// // console.log("api posts.js, do we hit here before errors"),
// passport.authenticate('jwt', { session: false }),
// (req, res) => {

//         const { isValid, errors } = validatePostInput(req.body);
//         if (!isValid) { return res.status(400).json(errors); }

//     const params = {
//       Bucket: process.env.AWS_BUCKET_NAME,  
//       Key: req.body.fileNum,
//       Body: req.body.blobData,                    
//       ContentType: "image/png"                 
//     };

    
//     s3.upload(params,(error,data)=>{
//     // s3.upload(params,(error,data)=>{
//     console.log("line 89 data posts.js",data, error)
//     // console.log("line 89 data posts.js",error)
//         if(error){ res.status(500).send({"err":error}) }

//         const newPost = new Post({
//           console1: console.log("req",req),
//           user: req.user, 
//           text: req.body.text,
//           // imageUrl: req.body.imageUrl,
//           // imageUrl: data.Location 
//         });

//         newPost.save()
//         .then(post => res.json(post));
//       })
//   }
// );

//result is Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client

// backup incase dont work

// ============================== MISSING CREDENTIALS???=========

router.post('/',
// console.log("api posts.js, do we hit here before errors"),
    passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { isValid, errors } = validatePostInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

console.log("s3 submit hit?")
console.log("process.env", process.env.AWS_S3_BUCKET_NAME)
console.log("req.body.blobdata", req.body.blobData)
console.log("req.body.blobdata typeof", typeof req.body.blobData)
// putobject seems to work

// var buffertry = Buffer.from(req.body.blobData.replace(/^data:image\/\w+;base64,/, ""), 'base64')


const params = {
  Bucket: process.env.AWS_S3_BUCKET_NAME,
  Key: req.body.fileNum,
  // Body: buffertry,
  Body: req.body.blobData,
  ACL: "public-read-write",
  // ContentType: "image/png"
}
  
  
  s3.putObject( params )
// s3.upload(params)
.promise()
.then(res => {
  console.log(`Upload succeeded - `, res);

  const newPost = new Post({
        user: req.user,
        text: req.body.text,
        imageUrl: res.Location
      });

      console.log("new post hit?")
      console.log(newPost)
      console.log(newPost.imageUrl)

      newPost.save()
      // .then(post => res.json(post));
})

.catch(err => {
  console.log("Upload failed:", err);
});
 
} );




//==================

// Attempt #2


// aws.config.update({
// accessKeyId: process.env.AWS_ACCESS_KEY_ID,              // accessKeyId that is stored in .env file
// secretAccessKey: process.env.AWS_ACCESS_KEY_SECRET,       // secretAccessKey is also store in .env file
// region: 'us-west-1'
// })

// const s3 = new aws.S3({
//         accessKeyId: process.env.AWS_ACCESS_KEY_ID,              // accessKeyId that is stored in .env file
//         secretAccessKey: process.env.AWS_ACCESS_KEY_SECRET       // secretAccessKey is also store in .env file
//       })

// router.post('/',
// // console.log("api posts.js, do we hit here before errors"),
//     passport.authenticate('jwt', { session: false }),
//   (req, res) => {
//     const { isValid, errors } = validatePostInput(req.body);

//     if (!isValid) {
//       return res.status(400).json(errors);
//     }

//     const uploadedImage =  s3.upload({
//       Bucket: process.env.AWS_S3_BUCKET_NAME,
//       Key: req.body.fileNum,
//       Body: req.body.blobData,
//     }).promise( 
//       () => {


//       const newPost = new Post({
//         console1: console.log("req",req),
//         user: req.user, 
//         text: req.body.text,
//         // imageUrl: req.body.imageUrl
//       });

//       newPost.save()
//       .then(post => res.json(post));
//     });
//   }
// );

// imagetest completely crashes it

// Unsupported payload, Error: Unsupported body payload object

// Attempt 3

// aws.config.update({
// accessKeyId: process.env.AWS_ACCESS_KEY_ID,              // accessKeyId that is stored in .env file
// secretAccessKey: process.env.AWS_ACCESS_KEY_SECRET,       // secretAccessKey is also store in .env file
// region: 'us-west-1'
// })

// const s3 = new aws.S3({
//         accessKeyId: process.env.AWS_ACCESS_KEY_ID,              // accessKeyId that is stored in .env file
//         secretAccessKey: process.env.AWS_ACCESS_KEY_SECRET,       // secretAccessKey is also store in .env file
//         region: 'us-west-1'
//       })

//=================
//imagetest 


// Attempt 4

// router.post('/',
// // console.log("api posts.js, do we hit here before errors"),
//     passport.authenticate('jwt', { session: false }),
//   (req, res) => {
//     const { isValid, errors } = validatePostInput(req.body);

//     if (!isValid) {
//       return res.status(400).json(errors);
//     }

//     const newPost = new Post({
//       console1: console.log("req",req),
//       user: req.user, 
//       text: req.body.text,
//       imageUrl: req.body.imageUrl
//     });

//     newPost.save()
//     .then(post => res.json(post));
//   }
// );



// router.post('/',
// // console.log("api posts.js, do we hit here before errors"),
//     passport.authenticate('jwt', { session: false }),
//   (req, res) => {
//     const { isValid, errors } = validatePostInput(req.body);

//     if (!isValid) {
//       return res.status(400).json(errors);
//     }

//     const newPost = new Post({
//       console1: console.log("req",req),
//       user: req.user, 
//       text: req.body.text,
//       imageUrl: req.body.imageUrl
//     });

//     newPost.save()
//     .then(post => res.json(post));
//   }
// );



module.exports = router;