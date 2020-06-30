var mongoose = require("mongoose");

var MemberSchema = new mongoose.Schema({
  name: String,
  role: String,
  address: String,
  availability: {}
}, 
  { 
    // When creating a new member, this allows you to save an empty field (i.e. Availability field) 
    // to the DB when submitting a form
    minimize: false   }
);

var Member = mongoose.model("Member", MemberSchema);

module.exports = Member;
