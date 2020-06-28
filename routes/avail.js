let express = require("express")
let router = express.Router();
let Avail = require("../controllers/avail");

router.get("/driverAvail", Avail.DriverAvail);

module.exports = router;