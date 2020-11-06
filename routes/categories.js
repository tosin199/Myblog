var express = require('express');
var router = express.Router();
var categories = [{id:1, category:"Welcome to backend blog"}, {id:2, category:"Frontend send request"}];

/* GET categories. */
router.get('/', function(req, res, next) {
  res.json(categories);
});

router.post('/:id', function(req, res) {
  catId = req.params.id;
  const newCategories = req.body;
  newCategories.id = catId;
  categories.push(newCategories);
  console.log(categories)
  res.json(categories);
});

router.put('/:id', function(req, res) {
  updateCategories = req.body;
  catId = req.params.id;
  categories.forEach(categoriesss => {
    if (categoriesss.id === parseInt(catId)){
      categoriesss.category = updatecategories.category;
    }
  })
  res.json(categories);
});

router.delete('/:id', function(req, res) {
  res.json({categories:categories.filter(categoriesss => categoriesss.id !== parseInt(req.params.id))});
});
module.exports = router;

