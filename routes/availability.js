let express = require('express')
let router = express.Router();
let AvailabilityController = require('../controllers/availability');
var Member = require("../models/member");

router.get('/availability', AvailabilityController.Availability(Member));
router.post('/update', AvailabilityController.Update);
module.exports = router;