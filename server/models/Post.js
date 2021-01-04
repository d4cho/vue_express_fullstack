const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  text: {
    type: String
  },
  createdAt: {
    type: Date,
    default: new Date()
  }
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
