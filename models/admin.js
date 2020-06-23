let mongoose = require("mongoose");

let adminSchema = new mongoose.Schema({
  userName: {
    type: String,
  },
  password: {
    type: String,
  },
});

let admin = mongoose.model("Admin", adminSchema);

module.exports = admin;
