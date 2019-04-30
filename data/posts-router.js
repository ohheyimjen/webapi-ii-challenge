const express = require('express');
const Posts = require('./seeds/posts');
const router = express.Router();

router.get('/api/posts', async(req, res) => {
  try {
    const posts = await Posts.find(req.query);
    res.status(200).json(posts);
  
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Error retrieving the posts. They are as elusive as the ring that rules them all!'
    });
  }
});

router.get('/api/posts/:id', async(req, res) => {
  try {
    const post = await Posts.findById(req.params.id);

    if(post) {
      res.status(200).json(post);
    } else {
      res.status(404).json({ message: 'Post not found. Hopefully it has not been destroyed by Sauron!'});
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Error retrieving the post. It is as elusive as the ring that rules them all!'
    });
    }
  });

  router.post()

module.exports = router;