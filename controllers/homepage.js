var Member = require('../models/member');

var HomepageController = {
  
  CreateNewDriver: function(request, response) {
    
    var driver = new Member({})

  },

  DriverList: function(request, response) {
    let drivers = [];

    Member.find(function(err, result) {
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

  GuestList: function(request, response) {
    let guests = [];

    Member.find(function(err, result) {
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

  }
}

module.exports = HomepageController;
