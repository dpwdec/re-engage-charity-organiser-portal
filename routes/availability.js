let express = require('express')
let router = express.Router();
let AvailabilityController = require('../controllers/availability');

const Member = require("../models/member");
const DateHelpers = require("../utils/dateHelpers");

router.get('/availability', AvailabilityController.Availability(Member, DateHelpers));
router.post('/update', AvailabilityController.Update(Member));
module.exports = router;