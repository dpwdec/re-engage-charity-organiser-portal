var express = require("express");
var router = express.Router();
<<<<<<< HEAD
var HomepageController = require('../controllers/homepage');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/createMember', HomepageController.CreateMember);
router.post('/deleteMember', HomepageController.DeleteMember);
router.get('/members', HomepageController.Members)

=======
var HomepageController = require("../controllers/homepage");
var Member = require("../models/member");

router.get("/", HomepageController.Index);
router.get("/drivers", HomepageController.DriverList(Member));
router.get("/guests", HomepageController.GuestList(Member));
router.post("/createMember", HomepageController.CreateMember(Member));
router.post("/deleteMember", HomepageController.DeleteMember(Member));
>>>>>>> 9cf736d1bccafaee11e4ea2e1db2c7cf6e4b4403

module.exports = router;
