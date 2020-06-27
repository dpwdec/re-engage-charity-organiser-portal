var helperFunction = require('./helperFunctions') 
var Member = require('../models/member');

var AvailabilitiesController = {

    DriverAvailability: (request, response) => {

      // Step 1: get current + next 3 months to be used in query
      var current_month = getArrayOfCurrentAndNextThreeMonths()[0]; // i.e. returns June 2020
      var month2 = getArrayOfCurrentAndNextThreeMonths()[1]; // i.e. returns July 2020
      var month3 = getArrayOfCurrentAndNextThreeMonths()[2]; // i.e. returns Aug 2020
      var month4 = getArrayOfCurrentAndNextThreeMonths()[3]; // i.e. returns Sept 2020
      
      // Step 2: Store results of Mongoose query 
      // drivers = [ {name: "Ralph", "Jul 2020": true, "Aug 2020": false} ]
      var drivers = [];

      // Step 3: Mongoose query
      Member.
        find({role: 'driver'}).
        select({ availability: current_month, month2, month3, month4 }).
        exec((err, result) => {
          response.send({ name: result.name, availabilities: result.availabilites })
        );
    }
}

module.exports = AvailabilitiesController;


Person.
  find({occupation: /host/}).
  limit(10).
  sort({ occupation: -1 }).
  select({ name: 1, occupation: 1 }).
  exec(callback);