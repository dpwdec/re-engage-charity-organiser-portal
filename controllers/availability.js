var helperFunction = require('./helperFunctions'); 
var Member = require('../models/member');

var AvailabilityController = {


    Availability: (memberModel, helperFunctions) => (request, response) => {
      var filter = 'name availability'
      var availabilitiesJSON = {
        months: helperFunctions.getArrayOfCurrentAndNextThreeMonths(),
        members: []
      }

      memberModel
      .find({role: request.query.role}, filter)
      .lean()
      .exec((err, result) => {
        if (!err) {
          availabilitiesJSON.members = result
          response.send(availabilitiesJSON)
        };
      });

    },


    Update: (request, response) => {

      var query = { _id: request.body.driver_id };

      Member.findOne(query, (err, result) => {
        var update = { availability: result.availability };
        update.availability[request.body.month_name] = (request.body.month_status == 'true');
        console.log(update);

        Member.findOneAndUpdate(query, update).
        then(() => {
          response.send({message: 'success'});
        })
      })

    }

}

module.exports = AvailabilityController;
