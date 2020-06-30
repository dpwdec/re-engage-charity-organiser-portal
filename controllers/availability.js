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


    Update: (request, response) => {
      // console.log(request.body);

      var query = { _id: request.body.driver_id };

      Member.findOne(query, (err, result) => {
        var update = { availability: result.availability };
        update.availability[request.body.month_name] = (request.body.month_status == 'true');
        console.log(update);

        Member.findOneAndUpdate( query, update, (err, result) => {
          // console.log(result.availability[request.body.month_name]);
          console.log(result);
          // result.save((err)=> {
          // console.log('success!')
          // })
        });

      })

    }

}

module.exports = AvailabilityController;
