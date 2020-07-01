var express = require('express');
var router = express.Router();
var HomepageController = require('../controllers/homepage');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/createMember', HomepageController.CreateMember);
router.post('/deleteMember', HomepageController.DeleteMember);
router.get('/members', HomepageController.Members)


module.exports = router;
