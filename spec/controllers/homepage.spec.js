jest.mock('../../models/member');
const Member = require('../../models/member');

var HomepageController = require("../../controllers/homepage");

describe("Homepage Controller", () => {
  let res, req;

  beforeEach(() => {
    res = { send: jest.fn() };
    req = {};
  });

  describe("Members List", () => {
    it("sends member data", async () => {
      controller = HomepageController.Members(Member);
      req = { query: { role: "" } };

      await controller(req, res);
      
      expect(res.send).toHaveBeenCalledWith({});
    });
  });

  describe("Create Member", () => {
    it("saves a new member to the database && returns OK", () => {
      req.body = { name: "Paula", role: "guest", address: "N8 2AA" };
      Member._saveMock.mockImplementation((callback) => callback(false));

      controller = HomepageController.CreateMember(Member);
      controller(req, res);

      expect(Member._saveMock).toHaveBeenCalled();
      expect(res.send).toHaveBeenCalledWith({ message: "ok" });
    });
  });

  describe("Delete Member", () => {
    it("deletes a member from the database", () => {
      Member.deleteOne.mockImplementation((target, callback) => callback(false));
      req.body = { id: "1" };

      controller = HomepageController.DeleteMember(Member);
      controller(req, res);

      expect(Member.deleteOne).toHaveBeenCalled();
      expect(res.send).toHaveBeenCalledWith({ message: "success!" });
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
