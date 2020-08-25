var express = require("express");
var router = express.Router();
var HomepageController = require('../controllers/homepage');
var Member = require("../models/member");

router.get("/", HomepageController.Index);

module.exports = router;
