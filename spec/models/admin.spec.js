let mongoose = require("mongoose");
require("../mongodb_helper");
let Admin = require("../../models/admin.js");

describe("Admin model", () => {
  beforeEach((done) => {
    mongoose.connection.collections.admins.drop(() => {
      done();
    });
  });

  afterEach((done) => {
    mongoose.connection.collections.admins.drop(() => {
      done();
    });
  });

  it("has a adminName", () => {
    let admin = new Admin({ adminName: "admin" });
    expect(admin.adminName).toEqual("admin");
  });

  it("has a password", () => {
    let admin = new Admin({ password: "1234" });
    expect(admin.password).toEqual("1234");
  });

  it("is storing data inside users table", (done) => {
    let admin = new Admin({ adminName: "admin", password: "1234" });

    admin.save((err) => {
      expect(err).toBeNull();
      Admin.find((err, admins) => {
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
