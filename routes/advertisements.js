var express = require('express');
var router = express.Router();
var advertisements = [{id:1, advert:"Welcome to backend blog"}, {id:2, advert:"Frontend send request"}];


/* GET advertisement. */
router.get('/', function(req, res, next) {
  res.json(advertisements);
});

router.post('/:id', function(req, res) {
  addId = req.params.id;
  const newAdvertisements = req.body;
  newAdvertisements.id = addId;
  advertisements.push(newAdvertisements);
  console.log(advertisements)
  res.json(advertisements);
});

router.put('/:id', function(req, res) {
  updateAdvertisements = req.body;
  addId = req.params.id;
  advertisements.forEach(advertisementsss => {
    if (advertisementsss.id === parseInt(addId)){
      advertisementsss.advert = updateadvertisementsss.advert;
    }
  })
  res.json(advertisements);
});

router.delete('/:id', function(req, res) {
  res.json({advertisements:advertisements.filter(advertisementsss => advertisementsss.id !== parseInt(req.params.id))});
});
module.exports = router;

