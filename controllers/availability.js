var helperFunction = require('./helperFunctions'); 
var Member = require('../models/member');

var AvailabilityController = {

    DriverAvailability: (request, response) => {
      // Step 1: get current + next 3 months to be used in query
      var month0 = getArrayOfCurrentAndNextThreeMonths()[0]; // i.e. returns 'Jun 2020'
      var month1 = getArrayOfCurrentAndNextThreeMonths()[1]; // i.e. returns 'Jul 2020'
      var month2 = getArrayOfCurrentAndNextThreeMonths()[2]; // i.e. returns 'Aug 2020'
      var month3 = getArrayOfCurrentAndNextThreeMonths()[3]; // i.e. returns 'Sept 2020'

      // Step 2: Store results of Mongoose query, i.e. drivers = [{name: "Ralph", "Jul 2020": true}]
      var drivers = [];
      var months = getArrayOfCurrentAndNextThreeMonths(); 

      // Step 3: Mongoose query
      var filter = 'availability.month0 availability.month1 availability.month2 availability.month3'

      Member.find(function(err, result) {
        console.log(result);
        result.forEach((member) => {
          if( member.role === 'driver' ) 
            if (
              member.availability.month0 || 
              member.availability.month1 || 
              member.availability.month2 || 
              member.availability.month3 
            ) { 
                drivers.push(member);
              } 
          else {
            console.log('Error!', err);
          }
        });
        console.log("Drivers only", drivers);
        response.send(drivers);
        console.log("Months", months);
        response.send(months);
      });
  
  }


}
module.exports = AvailabilityController;


      // Approach 2
      // Member.find({ role: 'driver' }).select(filter).lean().
      //   exec((err, result) => {
      //     console.log(result);
      //     if (!err) {
      //       result.forEach((driver) => {
      //         drivers.push(driver);
      //       });
      //       console.log("Drivers availability")
      //       console.log(drivers);
      //       response.send(drivers);
      //     } else {
      //       console.log("Error with executing query");
      //       console.log(err)
      //       }
      //     }
      //   );