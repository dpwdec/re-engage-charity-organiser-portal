var mongoose = require('mongoose');

var MemberSchema = new mongoose.Schema({
  name: String
});

var Member = mongoose.model('Member', MemberSchema);

module.exports = Member;