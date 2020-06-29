let express = require('express')
let router = express.Router();
let AvailabilityController = require('../controllers/availability');

router.get('/driverAvailability', AvailabilityController.DriverAvailability);

module.exports = router;