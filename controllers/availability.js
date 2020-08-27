var AvailabilityController = {
    Availability: (Member, DateHelpers) => async (request, response) => {
      const result = await Member
      .find({role: request.query.role}, 'name availability').lean().exec()
      .catch(() => response.status(500).send({message: "Error" }));
      if(!result) { return }

      response.status(200).send({
        months: DateHelpers.getArrayOfCurrentAndNextThreeMonths(),
        members: result
      });
    },

    Update: (Member) => async (request, response) => {
      let query = { _id: request.body.driver_id };

      let current = await Member.findOne(query)
      .catch(() => response.status(500).send({message: "Error" }));
      if(!current) { return }
      
      let updated = { availability: current.availability };
      updated.availability[request.body.month_name] = (request.body.month_status == 'true');

      let result = await Member.findOneAndUpdate(query, updated)
      .catch(() => response.status(500).send({message: "Error updating record." }));
      if(!result) { return }

      response.status(200).send({message: 'success'});
    }
}

module.exports = AvailabilityController;
