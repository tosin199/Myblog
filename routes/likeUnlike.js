var express = require('express');
var router = express.Router();
var likeUnlike = [{id:1, like:"Welcome to backend blog"}, {id:2, like:"Frontend send request"}];

/* GET likeUnlike. */
router.get('/', function(req, res, next) {
  res.json(likeUnlike);
});

router.post('/:id', function(req, res) {
  lunId = req.params.id;
  const newLikeUnlike = req.body;
  newLikeUnlike.id = lunId;
  likeUnlike.push(newLIkeUnlike);
  console.log(likeUnlike)
  res.json(likeUnlike);
});

router.put('/:id', function(req, res) {
  updateLikeUnlike = req.body;
  lunId = req.params.id;
  likeUnlike.forEach(likeUnlikesss => {
    if (likeUnlikesss.id === parseInt(lunId)){
      likeUnlikesss.like = updatelikeUnlike.like;
    }
  })
  res.json(likeUnlike);
});

router.delete('/:id', function(req, res) {
  res.json({likeUnlike:likeUnlike.filter(likeUnlikesss => likeUnlikesss.id !== parseInt(req.params.id))});
});
module.exports = router;
