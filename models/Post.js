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