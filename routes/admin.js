let express = require("express");
let router = express.Router();
let adminController = require("../controllers/admin");

router.post("/login", adminController.Login);

module.exports = router;

/* GET users listing. */
// router.get('/users', function(req, res, next) {
//   res.send('respond with a resource');
// });
