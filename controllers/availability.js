var helperFunction = require('./helperFunctions'); 
var Member = require('../models/member');

var AvailabilityController = {
    Availability: (memberModel, helperFunctions) => async (request, response) => {
      const result = await memberModel
      .find({role: request.query.role}, 'name availability').lean().exec()
      .catch(() => response.status(500).send({message: "Error" }));

      response.status(200).send({
        months: helperFunctions.getArrayOfCurrentAndNextThreeMonths(),
        members: result
      });
    },

    Update: (Member) => async (request, response) => {
      let query = { _id: request.body.driver_id };

      let current = await Member.findOne(query);
      let updated = { availability: current.availability };
      updated.availability[request.body.month_name] = (request.body.month_status == 'true');

      await Member.findOneAndUpdate(query, updated);

      response.status(200).send({message: 'success'});
    }
}

module.exports = AvailabilityController;
