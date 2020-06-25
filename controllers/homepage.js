var Member = require('../models/member');

var HomepageController = {
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

}

module.exports = HomepageController;
