
let express = require("express");
let router = express.Router();
let contactController = require("../controllers/admin");

router.get("/", contactController .Index);
module.exports = router;