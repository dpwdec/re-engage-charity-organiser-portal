jest.mock('../../models/member');
const Member = require('../../models/member');

var HomepageController = require("../../controllers/homepage");

describe("Homepage Controller", () => {
  var memberModelMock;
  var res;
  var req;

  beforeEach(() => {
    res = {
      send: jest.fn(),
    };
    req = {};
  });

  describe("Members List", () => {
    it("sends member data", () => {
      controller = HomepageController.Members(Member);
      req = { query: { role: "" } };
      controller(req, res);
      expect(res.send).toHaveBeenCalledWith({});
    });
  });

  describe("Create Member", () => {
    it("saves a new member to the database && returns OK", () => {
      req.body = { name: "Paula", role: "guest", address: "N8 2AA" };
      controller = HomepageController.CreateMember(Member);
      Member._saveMock.mockImplementation((callback) => callback(false));
      controller(req, res);
      expect(Member._saveMock).toHaveBeenCalled();
      expect(res.send).toHaveBeenCalledWith({ message: "ok" });
    });
  });

  describe("Delete Member", () => {
    it("deletes a member from the database", () => {
      memberModelMock = {
        deleteOne: jest.fn(),
      };
      req.body = { id: "1" };
      var res = { send: jest.fn() };
      controller = HomepageController.DeleteMember(memberModelMock);
      controller(req, res);
      expect(memberModelMock.deleteOne).toHaveBeenCalled();
    });
  });

  describe("Index", () => {
    it("checks home page", () => {
      var req = "";
      var res = { render: jest.fn() };
      index = HomepageController.Index(req, res);
      expect(res.render).toHaveBeenCalledWith("index");
    });
  });
});
