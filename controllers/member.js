let MemberController = {
  Members:(memberModel) => async (request, response) => {
    const result = await memberModel.find({role: request.query.role}).lean().exec()
    .catch(() => response.status(500).send({message: "Error" }));
    if(!result) { return }
    
    response.status(200).send(result);
  },

  CreateMember: (memberModel) => async (request, response) => {
    let member = new memberModel({
      name: request.body.name,
      role: request.body.role,
      address: request.body.address,
      telephone: request.body.telephone,
      availability: {},
    });

    const result = await member.save()
    .catch(() => response.status(500).send({message: "Error" }));
    if(!result) { return }

    response.status(200).send({ message: "ok" });
  },

  DeleteMember: (memberModel) => async (request, response) => {
    const result = await memberModel.deleteOne({ _id: request.body.id })
    .catch(() => response.status(500).send({message: "Error" }));
    if(!result) { return }

    response.status(200).send({ message: "success!" });
  },
};

module.exports = MemberController;
