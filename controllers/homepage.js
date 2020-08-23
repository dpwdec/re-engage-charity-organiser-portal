var HomepageController = {
  CreateMember: (memberModel) => async (request, response) => {
    let member = new memberModel({
      name: request.body.name,
      role: request.body.role,
      address: request.body.address,
      telephone: request.body.telephone,
      availability: {},
    });

    const result = await member.save();
    response.send({ message: "ok" });

    // member.save((err) => {
    //   if (err) {
    //     console.log(err);
    //   }
    //   response.send({ message: "ok" });
    // });
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

  Members:(memberModel) => async (request, response) => {
    const result = await memberModel.find({role: request.query.role}).lean().exec();
    response.send(result);
  },

  Index: (req, res, next) => {
    res.render("index");
  },
};

module.exports = HomepageController;
