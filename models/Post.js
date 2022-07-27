const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  text: {
    type: String,
    required: true
  },
  tag: {
    type: String
  },
  //Add Image in separate model file
  // image: {
  //   type: ???? ,
  //   required: true
  // },
  date: {
    type: Date,
    default: Date.now
  }
});

const Post = mongoose.model('post', PostSchema);
module.exports = Post ;