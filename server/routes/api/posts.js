const express = require('express');
const Post = require('../../models/Post');

const router = express.Router();

// Get Posts
router.get('/', async (req, res) => {
  const posts = await Post.find({});
  res.send(posts);
});

// Add Posts
router.post('/', async (req, res) => {
  const newPost = await new Post({
    text: req.body.text,
    createdAt: new Date()
  });

  await newPost.save((err, newPost) => {
    if (err) return res.status(400).send(err);
    return res.status(201).send(newPost);
  });
});

// Delete Posts
router.delete('/:id', async (req, res) => {
  await Post.findOneAndDelete({ _id: req.params.id });
  res.status(200).send();
});

module.exports = router;
