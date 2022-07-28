const express = require("express");
const router = express.Router();
const passport = require('passport');
// const jwt = require('jsonwebtoken');

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
    .sort({ date: -1 })
    .then(posts => res.json(posts))
    .catch(err =>
      res.status(404).json({ nopostsfound: 'No Posts found from that user' }
      )
    );
});

router.get('/:id', (req, res) => {
  console.log("req", req)
  Post.findById(req.params.id)
    .then(post => res.json(post))
    .catch(err =>
      res.status(404).json({ nopostsfound: 'No Post found with that ID' })
    );
});



router.post('/',
// console.log("api posts.js, do we hit here before errors"),
    passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { isValid, errors } = validatePostInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    const newPost = new Post({
      console: console.log(req),
      //parent ID, child posts
      user: req.user, 
      text: req.body.text,
      tag: req.body.tag
    });

    newPost.save()
    .then(post => res.json(post));
  }
);



module.exports = router;