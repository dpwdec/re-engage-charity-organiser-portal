let express = require('express')
let router = express.Router();
let AvailabilityController = require('../controllers/availability');

// console.log(AvailabilityController);
router.get('/availability', AvailabilityController.Availability);

module.exports = router;