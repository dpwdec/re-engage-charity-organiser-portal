let adminController = {

  Login: (adminModel) => (req, res) => {
    const { body } = req;
    const { adminName, password } = body;

    adminModel.findOne({ adminName: adminName }, (err, existingAdmin) => {
      if (err) {
        res.send({
          success: false,
          message: "Database error",
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
          message: "This username doesn't exist in the database.",
        });
      }
    });
  },

  Index: (req, res) => {
    res.render("admin");
  },

};

module.exports = adminController;
