var Member = require('../models/member');

var HomepageController = {
  DriverList: function(request, response) {
    let drivers = [];

    Member.find( {role: 'driver'}, function(err, result) {
      response.send(result)
    });

  },

}

module.exports = HomepageController;
