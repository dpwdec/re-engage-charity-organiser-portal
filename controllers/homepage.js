var Member = require('../models/member');

var HomepageController = {
  DriverList: function(request, response) {
    let drivers = [];

    Member.find(function(err, result) {
      // console.log("All results")
      // console.log(result);
      // console.log(err);
      result.forEach((member) => {
        // console.log("Each statement")
        // console.log(member);
        if(member.role === 'driver'){
          drivers.push(member);
        }
      });
      console.log("Drivers only")
      console.log(drivers);
      return;
    });

    response.send(drivers)
  },

}

module.exports = HomepageController;
