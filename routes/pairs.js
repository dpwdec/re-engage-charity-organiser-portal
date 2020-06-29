var express = require('express');
var router = express.Router();
var PairController = require('../controllers/pairs')

router.get('/', PairController.Pairing);
router.get('/map', PairController.Map);
router.get('/route', PairController.Route);

module.exports = router 