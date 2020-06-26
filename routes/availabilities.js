let express = require("express")
let router = express.Router();
let availabilitiesController = require("../controllers/availabilities");

router.get("/driversAvailability", availabilitiesController.DriverAvailability);

module.exports = router;