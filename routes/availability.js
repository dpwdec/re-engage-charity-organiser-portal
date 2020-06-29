let express = require('express')
let router = express.Router();
let AvailabilityController = require('../controllers/availability');

// console.log(AvailabilityController);
router.get('/driverAvailability', AvailabilityController.DriverAvailability);

module.exports = router;