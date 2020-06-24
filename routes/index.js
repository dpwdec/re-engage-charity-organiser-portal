var express = require('express');
var router = express.Router();
var HomepageController = require('../controllers/homepage');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/drivers', HomepageController.DriverList);
module.exports = router;
