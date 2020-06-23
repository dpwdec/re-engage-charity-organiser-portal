let admin = require("../models/admin"); //db

let adminController = {
  Login: function (req, res) {
    const { body } = req;
    const { userName, password } = body;

    admin.findOne({ userName: userName }, function (err, existingUser) {
      if (err) {
        res.send({
          success: false,
          message: "Datebase error",
        });
      } else if (existingUser !== null) {
        if (password == existingUser.password) {
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
          message: "There is no admin with that username",
        });
      }
    });
  },
};

module.exports = adminController;
