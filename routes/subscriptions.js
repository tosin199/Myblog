var express = require('express');
var router = express.Router();
var subscriptions = [{id:1, subscript:"Welcome to backend blog"}, {id:2, subscript:"Frontend send request"}];

/* GET subscriptions. */
router.get('/', function(req, res, next) {
  res.json(subscriptions);
});

router.post('/:id', function(req, res) {
  subId = req.params.id;
  const newSubscriptions = req.body;
  newSubscriptions.id = subId;
  subscriptions.push(newSubscriptions);
  console.log(subscriptions)
  res.json(subscriptions);
});

router.put('/:id', function(req, res) {
  updateSubscriptions = req.body;
  subId = req.params.id;
  subscriptions.forEach(subscriptionsss => {
    if (subscriptionsss.id === parseInt(subId)){
      subscriptionsss.subscript = updatesubscriptions.subscript;
    }
  })
  res.json(subscriptions);
});

router.delete('/:id', function(req, res) {
  res.json({subscriptions:subscriptions.filter(subscriptionsss => subscriptionsss.id !== parseInt(req.params.id))});
});
module.exports = router;

