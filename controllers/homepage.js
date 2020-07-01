var HomepageController = {
  CreateMember: (memberModel) => (request, response) => {
    var member = new memberModel({
      name: request.body.name,
      role: request.body.role,
      address: request.body.address,
      telephone: request.body.telephone,
      availability: {},
    });

    member.save((err) => {
      if (err) {
        console.log(err);
      }
      response.send({ message: "ok" });
    });
  },

<<<<<<< HEAD
  DeleteMember: (request, response) => {
=======
  DeleteMember: (memberModel) => (request, response) => {
>>>>>>> 9cf736d1bccafaee11e4ea2e1db2c7cf6e4b4403
    var id = request.body.id;
    memberModel.deleteOne({ _id: id }, (err) => {
      if (err) {
        throw err;
      }
      response.send({ message: "success!" });
    });
  },

<<<<<<< HEAD
  Members:(request, response) => {
    Member.find({role: request.query.role},(err, result) => {
      response.send(result);
=======
  DriverList: (memberModel) => (request, response) => {
    let drivers = [];

    memberModel.find((err, result) => {
      result.forEach((member) => {
        if (member.role === "driver") {
          drivers.push(member);
        }
      });
      response.send(drivers);
      console.log("driver response", drivers);
    });
  },

  GuestList: (memberModel) => (request, response) => {
    let guests = [];

    memberModel.find((err, result) => {
      result.forEach((member) => {
        if (member.role === "guest") {
          guests.push(member);
        }
      });
      response.send(guests);
      console.log("guest response", guests);
>>>>>>> 9cf736d1bccafaee11e4ea2e1db2c7cf6e4b4403
    });
  },

  Index: (req, res, next) => {
    res.render("index");
  },
};

module.exports = HomepageController;
