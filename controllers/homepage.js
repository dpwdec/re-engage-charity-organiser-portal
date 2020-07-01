var Member = require('../models/member');

var HomepageController = {

  CreateMember: (request, response) => {
    var member = new Member({
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

  DeleteMember: (request, response) => {
    console.log("we are in delete member function")
    var id = request.body.id;
    Member.deleteOne({"_id" : id}, function(err){
      if(err) { throw err; }
    });
  },

  DriverList: (request, response) => {
    console.log("driver request", request.body.telephone);
    let drivers = [];

    Member.find((err, result) => {
      result.forEach((member) => {

        if(member.role === 'driver'){
          drivers.push(member);
        }
      });
      response.send(drivers);
      console.log("driver response", drivers);
    });
  },

  GuestList: (request, response) => {
    console.log("guest request", request.body.telephone);
    let guests = [];

    Member.find((err, result) => {
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
