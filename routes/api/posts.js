
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
  
  router.get('/', (req, res) => {
    Post.find()
    .sort({ date: -1 })
    .then(posts => res.json(posts))
    .catch(err => res.status(404).json({ nopostsfound: 'No Posts found' }));
});

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
  Post.find({ "tags": { $regex: req.params.query, $options: 'i' } })
    .then(posts => {
      res.json(posts);
    })
    .catch(err => res.status(404).json({ nopostsfound: 'No posts found with that tag' }));
})



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
          console.log(req.user)
          const newPost = new Post({
          //parent ID, child posts
          user: req.user, 
          text: req.body.text,
          tag: req.body.tag,
          imageUrl: data.Location
        });
                
        console.log("image url for local testing until threaded",newPost.imageUrl)
        
        newPost.save().then(post => res.json(post));
      
    })
  })



module.exports = router;