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
  },

  DeleteMember: (memberModel) => async (request, response) => {
    await memberModel.deleteOne({ _id: request.body.id });
    response.send({ message: "success!" });
  },

  Members:(memberModel) => async (request, response) => {
    const result = await memberModel.find({role: request.query.role}).lean().exec()
    .catch(error => response.status(500).send({message: "Error" }));
    
    response.send(result);
  },

  Index: (req, res, next) => {
    res.render("index");
  },
};

module.exports = HomepageController;
