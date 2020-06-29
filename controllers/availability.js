var helperFunction = require('./helperFunctions'); 
var Member = require('../models/member');

var AvailabilityController = {


    Availability: (request, response) => {
      console.log(request.query);
      var filter = 'name availability'

      var availabilitiesJSON = {
        months: helperFunction.getArrayOfCurrentAndNextThreeMonths(),
        members: []
      }

      Member.find({role: request.query.role}, filter ).lean().
      exec((err, result) => {
        if (!err) {
          availabilitiesJSON.members = result
          response.send(availabilitiesJSON)
        };
      });

    },

}

module.exports = AvailabilityController;
