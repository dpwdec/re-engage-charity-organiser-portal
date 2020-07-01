var Member = require('../models/member');

var HomepageController = {

  CreateMember: (request, response) => {
    var member = new Member({
      name: request.body.name,
      role: request.body.role,
      address: request.body.address,
      telephone: request.body.telephone,
      availability: { },
    });

    member.save((err) => {
      if (err) { console.log(err) }
      response.send({message: "ok"});
    });
  },

  DeleteMember: (request, response) => {
    var id = request.body.id;
    Member.deleteOne({"_id" : id}, function(err){
      if(err) { throw err; }
      response.send({message: 'success!'});
    });
  },

  Members:(request, response) => {
    Member.find({role: request.query.role},(err, result) => {
      response.send(result);
    });
  }

}

module.exports = HomepageController;
