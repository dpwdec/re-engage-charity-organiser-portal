var express = require('express');
var router = express.Router();
var PairController = require('../controllers/pairs');

// Dependencies
let Member = require("../models/member");
let GoogleMaps = require("@google/maps");
let ShortestDistancePairs = require("../controllers/pairs/shortestDistancePairs");
let AveragePairs = require("../controllers/pairs/averagePairs");
let PairingPopulation = require("../controllers/pairs/pairingPopulation");

router.get('/', PairController.Pairing(Member, GoogleMaps, ShortestDistancePairs, AveragePairs, PairingPopulation));

module.exports = router 