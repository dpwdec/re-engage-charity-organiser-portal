let express = require('express')
let router = express.Router();
let AvailabilityController = require('../controllers/availability');

// console.log(AvailabilityController);
router.get('/availability', AvailabilityController.Availability);
router.post('/update', AvailabilityController.Update);
module.exports = router;