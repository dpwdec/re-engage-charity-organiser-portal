let mongoose = require("mongoose");
require("../mongodb_helper");
let User = require("../../models/user.js");

describe("User model", function () {
  beforeEach(function (done) {
    mongoose.connection.collections.users.drop(function () {
      done();
    });
  });

  it("has a userName", function () {
    let user = new User({ userName: "admin" });
    expect(user.userName).toEqual("admin");
  });
});
