let mongoose = require("mongoose");
require("../mongodb_helper");
let Admin = require("../../models/admin.js");

describe("Admin model", function () {
  beforeEach(function (done) {
    mongoose.connection.collections.admins.drop(function () {
      done();
    });
  });

  it("has a userName", function () {
    let admin = new Admin({ userName: "admin" });
    expect(adin.userName).toEqual("admin");
  });
});
