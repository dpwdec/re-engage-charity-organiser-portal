var Member = require('../models/member');

var HomepageController = {

  CreateMember: (request, response) => {

    var member = new Member({
      name: request.body.name,
      role: request.body.role,
      address: request.body.address
    });

    member.save((err) => {
      if (err) { console.log(err) }
      // sendFlashMessage(response, request, '/', 'Member saved!');
    });
  },

  DriverList: (request, response) => {
    let drivers = [];

    Member.find((err, result) => {
      // console.log(result)
      result.forEach((member) => {

        if(member.role === 'driver'){
          drivers.push(member);
        }
      });
      // console.log("Drivers only")
      // console.log(drivers)
      response.send(drivers);
    });
  },

  GuestList: (request, response) => {
    let guests = [];

    Member.find((err, result) => {
      // console.log(result)
      result.forEach((member) => {

        if(member.role === 'guest'){
          guests.push(member);
        }
      });
      // console.log("Guests only")
      // console.log(guests)
      response.send(guests);
    });
  },
}

// var sendFlashMessage = (response, request, route, message) => {
//   request.session.errorMessage = message;
//   response.redirect(route);
// };

module.exports = HomepageController;
