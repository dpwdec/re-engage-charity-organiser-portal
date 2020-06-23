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
    expect(admin.userName).toEqual("admin");
  });

  it("has a password", function () {
    let admin = new Admin({ password: "1234" });
    expect(admin.password).toEqual("1234");
  });
});
