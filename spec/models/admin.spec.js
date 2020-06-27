let mongoose = require("mongoose");
require("../mongodb_helper");
let Admin = require("../../models/admin.js");

describe("Admin model", function () {
  beforeEach(function (done) {
    mongoose.connection.collections.admins.drop(function () {
      done();
    });
  });

  it("has a adminName", function () {
    let admin = new Admin({ adminName: "admin" });
    expect(admin.adminName).toEqual("admin");
  });

  it("has a password", function () {
    let admin = new Admin({ password: "1234" });
    expect(admin.password).toEqual("1234");
  });

  it("is storing data inside users table", function (done) {
    let admin = new Admin({ adminName: "admin", password: "1234" });

    admin.save(function (err) {
      expect(err).toBeNull();
      Admin.find(function (err, admins) {
        expect(err).toBeNull();
        expect(admins[0].adminName).not.toEqual("maker");
        expect(admins[0].password).not.toEqual("000");
        expect(admins[0].adminName).toEqual("admin");
        expect(admins[0].password).toEqual("1234");

        done();
      });
    });
  });
});
