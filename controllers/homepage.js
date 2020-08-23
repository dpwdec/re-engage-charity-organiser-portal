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

  DeleteMember: (memberModel) => (request, response) => {
    var id = request.body.id;
    memberModel.deleteOne({ _id: id }, (err) => {
      if (err) {
        throw err;
      }
      response.send({ message: "success!" });
    });
  },


  Members:(memberModel) => (request, response) => {
    memberModel
    .find({role: request.query.role})
    .lean()
    .exec((err, result) => {
      response.send(result);
    });
    // memberModel.find({role: request.query.role},(err, result) => {
    //   response.send(result);
    // });
  },

  Index: (req, res, next) => {
    res.render("index");
  },
};

module.exports = HomepageController;
