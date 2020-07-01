let adminController = {
  Login: (adminModel) => (req, res) => {
    const { body } = req;
    const { adminName, password } = body;
    console.log(body);

    adminModel.findOne({ adminName: adminName }, (err, existingAdmin) => {
      console.log(existingAdmin);
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
            admin: existingAdmin,
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
  Index: (req, res) => {
    res.render("admin");
  },
};

module.exports = adminController;
