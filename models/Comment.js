const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  text: {
    type: String,
    required: true
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

const Comment = mongoose.model('comment', CommentSchema);
module.exports = Comment ;