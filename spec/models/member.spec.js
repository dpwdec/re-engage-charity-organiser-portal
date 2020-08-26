let mongoose = require("mongoose");
require("../mongodb_helper");
let Member = require("../../models/member.js");

describe("Member Model", () => {
  beforeEach((done) => {
    mongoose.connection.collections.members.drop(() => {
      done();
    });
  });

  afterEach((done) => {
    mongoose.connection.collections.members.drop(() => {
      done();
    });
  });

  it("has member info", () => {
    let member = new Member({
      name: "Jimothy",
      role: "driver",
      address: "XXXX XXX",
      telephone: "00000000",
      availability: {},
    });

    expect(member.name).toEqual("Jimothy");
    expect(member.role).toEqual("driver");
    expect(member.address).toEqual("XXXX XXX");
    expect(member.telephone).toEqual("00000000");
    expect(member.availability).toEqual({});
  });

  it("saves member to the database", async () => {
    let member = new Member({
      name: "Jimothy",
      role: "driver",
      address: "XXXX XXX",
      telephone: "00000000",
      availability: {},
    });

    await member.save();

    let members = await Member.find();

    expect(members[0].name).toEqual("Jimothy");
    expect(members[0].role).toEqual("driver");
    expect(members[0].address).toEqual("XXXX XXX");
    expect(members[0].telephone).toEqual("00000000");
    expect(members[0].availability).toEqual({});
  });
});
