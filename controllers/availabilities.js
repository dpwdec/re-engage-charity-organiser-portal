var helperFunction = require('./helperFunctions') 
var Member = require('../models/member');

var AvailabilitiesController = {

    DriverAvailability: (request, response) => {

      var current_month = getArrayOfCurrentAndNextThreeMonths()[0];
      var month2 = getArrayOfCurrentAndNextThreeMonths()[1]; 
      var month3 = getArrayOfCurrentAndNextThreeMonths()[2];
      var month4 = getArrayOfCurrentAndNextThreeMonths()[3];

      var drivers = [];
      
      // Mongoose query to return 

      
    }
}

module.exports = AvailabilitiesController;

