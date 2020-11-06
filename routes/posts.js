var express = require('express');
var router = express.Router();
var posts = [{id:1, post:"Welcome to backend blog"}, {id:2, post:"Frontend send request"}];

/* GET posts. */
router.get('/', function(req, res, next) {
  res.json(posts);
});

router.post('/:id', function(req, res) {
  posId = req.params.id;
  const newPosts = req.body;
  newPosts.id = posId;
  posts.push(newPosts);
  console.log(posts)
  res.json(posts);
});

router.put('/:id', function(req, res) {
  updatePosts = req.body;
  posId = req.params.id;
  posts.forEach(postsss => {
    if (postsss.id === parseInt(posId)){
      postsss.post = updateposts.post;
    }
  })
  res.json(posts);
});

router.delete('/:id', function(req, res) {
  res.json({posts:posts.filter(postsss => postsss.id !== parseInt(req.params.id))});
});
module.exports = router;

