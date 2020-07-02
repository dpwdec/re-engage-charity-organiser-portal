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
      memberModelMock = {
        find: (query, callback) => {
          var result = [
            {
              name: "Dec",
              role: "driver",
            },
            {
              name: "Cat",
              role: "guest",
            },
          ];
          var err = {};
          callback(err, result);
        },
      };
      controller = HomepageController.Members(memberModelMock);
      req = {query:{role:""}}
      controller(req, res);
      expect(res.send).toHaveBeenCalled();
    });
  });

  describe("Create Member", () => {
    it("saves a new member to the database", () => {
      memberModelMock = jest.fn();
      var saveMock = jest.fn();
      memberModelMock.mockImplementation(() => {
        return { save: saveMock };
      });
      req.body = { name: "Paula", role: "guest", address: "N8 2AA" };
      controller = HomepageController.CreateMember(memberModelMock);
      controller(req, res);
      expect(saveMock).toHaveBeenCalled();
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
