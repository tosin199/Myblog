var express = require('express');
var router = express.Router();
var categories = [{id:1, user:"Welrcome to backend blog"}, {id:2, user:"Frontend send request"}];

/* GET Users.page*/
router.get('/', function(req, res, next) {
  res.json(users);
});

router.post('/:id', function(req, res) {
  useId = req.params.id;
  const newUsers = req.body;
  newUsers.id = useId;
  users.push(newUsers);
  console.log(users)
  res.json(users);
});

router.put('/:id', function(req, res) {
  updateUsers = req.body;
  useId = req.params.id;
  users.forEach(usersss => {
    if (usersss.id === parseInt(useId)){
      usersss.user = updateusers.user;
    }
  })
  res.json(users);
});
router.delete('/:id', function(req, res) {
  res.json({users:users.filter(usersss => usersss.id !== parseInt(req.params.id))});
});
module.exports = router;