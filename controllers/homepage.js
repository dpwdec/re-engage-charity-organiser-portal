var Member = require('../models/member');

var HomepageController = {
  DriverList: function(request, response) {
    Member.find(function(err, result) {
     if (request.member.role === "driver") { 
       response.send(result); 
      } 
    });
  },

}

module.exports = HomepageController;