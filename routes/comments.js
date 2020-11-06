var express = require('express');
var router = express.Router();
var categories = [{id:1, comment:"Welcome to backend blog"}, {id:2, comment:"Frontend send request"}];

/* GET comments.page */
router.get('/', function(req, res, next) {
  res.json(comments);
});

router.post('/:id', function(req, res) {
  comId = req.params.id;
  const newComments = req.body;
  newComments.id = comId;
  comments.push(newComments);
  console.log(comments)
  res.json(comments);
});

router.put('/:id', function(req, res) {
  updateComments = req.body;
  comId = req.params.id;
  comments.forEach(commentsss => {
    if (commentsss.id === parseInt(comId)){
      commentsss.comment = updatecomments.comment;
    }
  })
  res.json(comment);
});
router.delete('/:id', function(req, res) {
    res.json({comments:comments.filter(commentsss => commentsss.id !== parseInt(req.params.id))});
  });
  module.exports = router;
  
  