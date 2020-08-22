var helperFunction = require('./helperFunctions'); 
var Member = require('../models/member');

var AvailabilityController = {


    Availability: (memberModel, helperFunctions) => (request, response) => {
      memberModel
      .find({role: request.query.role}, 'name availability')
      .lean()
      .exec((err, result) => {
        console.log(result);
        if (!err) {
          response.send({
            months: helperFunctions.getArrayOfCurrentAndNextThreeMonths(),
            members: result
          });
        }
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
