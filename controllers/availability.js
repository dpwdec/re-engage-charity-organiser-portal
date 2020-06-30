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
     console.log(request.body);

     Member.findOne( {_id: request.body.driver_id}, (err, result) => {
       result.availability[request.body.month_name] = (request.body.month_status == 'true')
       console.log(result);
       var newMemberData = {
        name: result.name, 
        _id: result._id, 
        availability: result.availability  
      } 
      var newMember = new Member(newMemberData) 
      newMember.save((err)=> {
        console.log('success!')
      })
     })

    }

}

module.exports = AvailabilityController;
