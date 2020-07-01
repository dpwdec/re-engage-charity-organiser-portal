let express = require("express");
let router = express.Router();
let adminController = require("../controllers/admin");
const Admin = require("../models/admin");

router.post("/login", adminController.Login(Admin));
router.get("/login", adminController.Index);
module.exports = router;

/* GET users listing. */
// router.get('/users', function(req, res, next) {
//   res.send('respond with a resource');
// });
