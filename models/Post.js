const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  userName: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  tag: {
    type: String
  },
  // origin: {
  //   type: Schema.Types.ObjectId,
  //   default: null,
  // },
  parentUrls: [{
    type: Schema.Types.ObjectId,
    default: {}
  }],
  // origin: {
  //   type: String,
  // },
  // parentComment: [{
  //   type: String,
  // }],

// try objectId first, see if string worst case
// make origin when new post is created
// add parentcomment to array when comment is replied to in post
// Array size limit may pose limit over total replies available
// search should fetch all posts including that ID;
// for heirarchy, sort by Array.length of parrent comments

  imageUrl: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Post = mongoose.model('post', PostSchema);
module.exports = Post ;