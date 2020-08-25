let express = require('express')
let router = express.Router();
let AvailabilityController = require('../controllers/availability');

const Member = require("../models/member");
const HelperFunctions = require("../controllers/helperFunctions");

router.get('/availability', AvailabilityController.Availability(Member, HelperFunctions));
router.post('/update', AvailabilityController.Update(Member));
module.exports = router;