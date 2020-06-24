var Member = require('../models/member');

var HomepageController = {
  DriverList: function(request, response) {
    let drivers = [];

    Member.find(function(err, result) {
      result.forEach((member) => {
        if(member.role === 'driver'){
          drivers.push(member);
        }
      });
      response.send(drivers)
    });

  },

}

module.exports = HomepageController;
