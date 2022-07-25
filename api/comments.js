const express = require("express");
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');

const validateCommentInput = require('../../validation/comment');
const Comment = require('../models/Comment')
const mongoose = require('mongoose');


router.get("/test", (req, res) => {
 res.json({ msg: "this is the testing route Comments" }) } )  ;

router.get('/', (req, res) => {
  Comment.find()
    .sort({ date: -1 })
    .then(comments => res.json(comments))
    .catch(err => res.status(404).json({ nocommentsfound: 'No Comments found' }));
});

router.get('/user/:user_id', (req, res) => {
  Comment.find({ user: req.params.user_id })
    .sort({ date: -1 })
    .then(comments => res.json(comments))
    .catch(err =>
      res.status(404).json({ nocommentsfound: 'No comments found from that user' }
      )
    );
});

router.get('/:id', (req, res) => {
  Comment.findById(req.params.id)
    .then(comment => res.json(comment))
    .catch(err =>
      res.status(404).json({ nocommentfound: 'No comment found with that ID' })
    );
});



router.post('/',
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { isValid, errors } = validateCommentInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    const newComment = new Comment({
      user: req.user.id,
      text: req.body.text
    });

    newComment.save()
    .then(comment => res.json(comment));
  }
);



module.exports = router;