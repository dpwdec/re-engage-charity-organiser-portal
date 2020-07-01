var HomepageController = {

  CreateMember: (memberModel) => (request, response) => {
    var member = new memberModel({
      name: request.body.name,
      role: request.body.role,
      address: request.body.address,
      availability: { },
    });


    member.save((err) => {
      if (err) { console.log(err) }
      // sendFlashMessage(response, request, '/', 'Member saved!');
      response.send({message: "ok"});
    });
  },

  DeleteMember: (memberModel) => (request, response) => {
    console.log("we are in delete member function")
    var id = request.body.id;
    memberModel.deleteOne({"_id" : id}, (err) => {
      if(err) { throw err; }
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
    });
  }

}

// var sendFlashMessage = (response, request, route, message) => {
//   request.session.errorMessage = message;
//   response.redirect(route);
// };

module.exports = HomepageController;
