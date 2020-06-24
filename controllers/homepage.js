var Member = require('../models/member');

var HomepageController = {
  DriverList: function(request, response) {
    //drivers = []
    console.log(1);
    Member.find(function(err, result) {
      console.log(result);
      console.log(err);
      //result.foreach
      //member
      //if member is driver
      //drivers.push(member)

      if (response.members.role === "driver") {
        console.log(2);
        console.log(result.body);
        response.send(result.body);
      }
      return;
    });

    //response.send(drivers)
  },

}

module.exports = HomepageController;
