let express = require("express")
let router = express.Router();
let availabilities= require("../controllers/availabilities");

router.get("/driversAvailability", availabilities.DriverAvailability);

module.exports = router;