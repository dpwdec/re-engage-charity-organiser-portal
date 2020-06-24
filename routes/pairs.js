var express = require('express');
var router = express.Router();
var PairController = require('../controllers/pairs')

router.get('/', PairController.Pairing);

module.exports = router 