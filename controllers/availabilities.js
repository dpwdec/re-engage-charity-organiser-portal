var helperFunction = require('./helperFunctions') 
var Member = require('../models/member');

var Availabilities= {

    DriverAvailability: (request, response) => {

      // Step 1: get current + next 3 months to be used in query
      var month1 = getArrayOfCurrentAndNextThreeMonths()[0]; // i.e. returns June 2020
      var month2 = getArrayOfCurrentAndNextThreeMonths()[1]; // i.e. returns July 2020
      var month3 = getArrayOfCurrentAndNextThreeMonths()[2]; // i.e. returns Aug 2020
      var month4 = getArrayOfCurrentAndNextThreeMonths()[3]; // i.e. returns Sept 2020
      
      // Step 2: Store results of Mongoose query 
      // drivers = [ {name: "Ralph", "Jul 2020": true, "Aug 2020": false} ]
      var drivers = [];

      // Step 3: Mongoose query
      var filter = 'availability.month1 availability.month2 availability.month3 availability.month4'

      Member.find({ role: 'driver' }).select(filter).lean().
        exec((err, result) => {
          if (!err) {
            result.forEach((driver) => {
              drivers.push(driver);
            });
            console.log("Drivers availability")
            console.log(drivers);
            response.send(drivers);
          } else {
            console.log("Error with executing query");
            console.log(err)
            }
          }
        );

      }
}

module.exports = Availabilities;
