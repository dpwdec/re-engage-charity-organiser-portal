let express = require("express");
let router = express.Router();
let adminController = require("../controllers/admin");
const Admin = require("../models/admin");

router.route("/login")
.post(adminController.Login(Admin))
.get(adminController.Index);

module.exports = router;

/* GET users listing. */
// router.get('/users', function(req, res, next) {
//   res.send('respond with a resource');
// });
