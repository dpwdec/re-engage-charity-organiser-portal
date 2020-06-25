let admin = require("../models/admin"); //db

let adminController = {
  Login: function (req, res) {
    const { body } = req;
    const { adminName, password } = body;
    console.log(body);

    admin.findOne({ adminName: adminName }, function (err, existingAdmin) {
      if (err) {
        res.send({
          success: false,
          message: "Datebase error",
        });
      } else if (existingAdmin !== null) {
        if (password == existingAdmin.password) {
          res.send({
            success: true,
            message: "Valid log in",
          });
        } else {
          res.send({
            success: false,
            message: "Wrong password",
          });
        }
      } else {
        res.send({
          success: false,
          message: "There is no admin with that adminName",
        });
      }
    });
  },
  Index: function (req, res) {
    res.render("admin");
  },
};

module.exports = adminController;
