var Member = require('../models/member');

var Homepage = {
  DriverList: function(request, response) {
    Member.find(function(err, result) {
      response.send(result);
    });
  },

}

module.exports = Homepage;