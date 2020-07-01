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

  DeleteMember: (request, response) => {
    var id = request.body.id;
    memberModel.deleteOne({ _id: id }, (err) => {
      if (err) {
        throw err;
      }
      response.send({ message: "success!" });
    });
  },

  Members:(request, response) => {
    Member.find({role: request.query.role},(err, result) => {
      response.send(result);
      console.log("helloo")
    });
  },

  Index: (req, res, next) => {
    res.render("index");
  },
};

module.exports = HomepageController;
