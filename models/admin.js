let mongoose = require("mongoose");

let adminSchema = new mongoose.Schema({
  adminName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

let admin = mongoose.model("Admin", adminSchema);

module.exports = admin;
