var HomepageController = {

  CreateMember: (memberModel) => (request, response) => {
    var member = new memberModel({
      name: request.body.name,
      role: request.body.role,
      address: request.body.address,
      telephone: request.body.telephone,
      availability: { },
    });

    member.save((err) => {
      if (err) { console.log(err) }
      response.send({message: "ok"});
    });
  },

  DeleteMember: (memberModel) => (request, response) => {
    console.log("we are in delete member function")
    var id = request.body.id;
    memberModel.deleteOne({"_id" : id}, (err) => {
      if(err) { throw err; }
      response.send({message: 'success!'});
    });
  },

  DriverList: (memberModel) => (request, response) => {
    let drivers = [];

    memberModel.find((err, result) => {
      result.forEach((member) => {

        if(member.role === 'driver'){
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

        if(member.role === 'guest'){
          guests.push(member);
        }
      });
      response.send(guests);
      console.log("guest response",guests);
    });
  }

}

module.exports = HomepageController;
