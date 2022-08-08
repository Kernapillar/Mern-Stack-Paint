
const express = require("express");
const router = express.Router();
const passport = require('passport');
const aws = require('aws-sdk')         
require("dotenv").config();                      // for env file

const validatePostInput = require('../../validation/post');
const Post = require('../../models/Post')
const mongoose = require('mongoose');

router.get("/test", (req, res) => {
  res.json({ msg: "this is the testing route Posts" }) } )  ;
  

router.get('/user/:user_id', (req, res) => {
  Post.find({ user: req.params.user_id })
    // .sort({ date: -1 })

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
      

router.get('/search/:query', (req, res) => {
  // console.log(req.params.query, 'this should be the query')
  Post.find({ "text": { $regex: req.params.query, $options: 'i' } })
    .then(posts => {
      res.json(posts);
    })
    .catch(err => res.status(404).json({ nopostsfound: 'No posts found with that query' }));
})

router.get('/tags/:query', (req, res) => {
  // console.log(req.params.query, 'this should be the query')
  // console.log(req.params, 'this should be the params')
  // Post.find({ "tags": { $regex: req.params.query } })
  Post.find({ "tag": { $regex: req.params.query, $options: 'i' } })
  // Post.find({ "tags": { $regex: req.params.query, $options: 'i' } }).where()
    .then(posts => {
      res.json(posts);
    })
    .catch(err => res.status(404).json({ nopostsfound: 'No posts found with that tag' }));
})

router.get('/comments/:query', (req, res) => {
  // console.log(req.params.query, 'this should be the query')
  // console.log(typeof req.params.query, 'this should be the query typeof')

  Post.find({ parentUrls: req.params.query })
  //I think something's going on with the array
    .then(post => { res.json(post) })
    .catch(err => res.status(404).json({ nopostsfound: 'No comments found' }));
})






router.get('/', (req, res) => {
  console.log("are we hitting here")
  Post.find()
    .sort({ date: -1 })
    .then(posts => res.json(posts))
    .catch(err => res.status(404).json({ nopostsfound: 'No Posts found' }));
});




      aws.config.update({
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,              
      secretAccessKey: process.env.AWS_ACCESS_KEY_SECRET,      
      region: 'us-west-1',
      })
      
      const s3 = new aws.S3({
        region: 'us-west-1',
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,       
        secretAccessKey: process.env.AWS_ACCESS_KEY_SECRET ,  
      })
      




router.post('/',

    passport.authenticate('jwt', { session: false }),
  (req, res) => {
    console.log("posts routes req",req)
    const { isValid, errors } = validatePostInput(req.body);
    if (!isValid) { return res.status(400).json(errors); }
  const buffertry = req.body.blobData
  let replaced = buffertry.replace("data:image/png;base64,","")
  buffalo = Buffer.from(replaced, 'base64')


const params = {
  Bucket: process.env.AWS_S3_BUCKET_NAME,
  Key: req.body.fileNum,
  Body: buffalo,
  ACL: "public-read-write",
  ContentEncoding: 'base64',
  ContentType: "image/png"
}
  
    s3.upload(params, (error, data)=> {
      if (error) { res.status(500).send({ "err": error }) }
          // console.log("posts.js line 98",req)
          // console.log("posts.js line 99",req.user)
          const newPost = new Post({
          parentUrls: req.body.parentUrls,
          user: req.user,
          userName: req.user.handle,  
          title: req.body.title,
          text: req.body.text,
          tag: req.body.tag,
          imageUrl: data.Location
        });
        
        console.log("posts.js line 110 post submitted object ",newPost )
        console.log("posts.js line 111 post submitted object origin ",newPost.origin )
        console.log("posts.js line 112 post submitted object ID ",newPost._id )
        // if (!newPost.origin) {newPost.origin = newPost._id}
        console.log("posts.js line 113 post submitted object ", newPost )
        console.log("image url for local testing until threaded",newPost.imageUrl)
        
        newPost.save().then(post => res.json(post));
        console.log("posts.js line 117 post submitted object ",newPost )
        console.log("posts.js line 118 post submitted object ", newPost._id )
        console.log("posts.js line 118 post submitted object ",newPost._id )
        
    })
  }
  )

router.patch('/:id', 
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    // console.log("posts routes req", req)
    // const { isValid, errors } = validatePostInput(req.body);
    // if (!isValid) { return res.status(400).json(errors); }
    const buffertry = req.body.blobData
    console.log("buffertry 126 posts.js",buffertry)
    let replaced = buffertry.replace("data:image/png;base64,", "")
    buffalo = Buffer.from(replaced, 'base64')



    const params = {
      Bucket: process.env.AWS_S3_BUCKET_NAME,
      Key: req.body.fileNum,
      Body: buffalo,
      ACL: "public-read-write",
      ContentEncoding: 'base64',
      ContentType: "image/png"
    }

    // console.log("line 141 after params set on bucket")

    s3.upload(params, (error, data) => {
      if (error) { res.status(500).send({ "err": error }) }
      // console.log("posts.js line 142", req)
      // console.log("posts.js line 143", req.user)
      // console.log("posts.js data 144", data)
      const updatePost = ({
        //parent ID, child posts
        id: req.body.id,
        user: req.user,
        userName: req.user.handle,
        title: req.body.title,
        text: req.body.text,
        tag: req.body.tag,
        imageUrl: data.Location
      });
      Post.findByIdAndUpdate(updatePost.id, updatePost).then(post => res.json(post))
      // newPost.save().then(post => res.json(post));

    })
  }


//   (req, res) => {
//       console.log("do we hit request",req)
//   Post.findByIdAndUpdate(req.params.id, req.body, 
//   // Post.findByIdAndUpdate(req.params.id,req.body) , 
//     (error, data) => {
//       if (error) {
//         console.log(error);
//       } else {
//         res.json(data), console.log("success!");
//       }
//     })
// }
)


router.patch('/:id', 
  passport.authenticate('jwt', { session: false }),
    (req, res) => {
      // console.log("do we hit request",req)
  Post.findByIdAndUpdate(req.params.id, req.body, 
  // Post.findByIdAndUpdate(req.params.id,req.body) , 
    (error, data) => {
      if (error) {
        console.log(error);
      } else {
        res.json(data), console.log("success!");
      }
    })
})

router.delete('/:id', (req, res) => {
  Post.findByIdAndDelete(req.params.id, (error, data) => {
    if (error) {
      console.log(error);
    } else {
      res.status(200).json({
        message: data
      })
    }
  })
})


module.exports = router;