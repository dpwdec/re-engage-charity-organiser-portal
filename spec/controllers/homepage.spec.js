var HomepageController = require("../../controllers/homepage");

describe("Homepage Controller", () => {
  var memberModelMock;
  var res;
  var req;

  beforeEach(() => {
    memberModelMock = {
      find: (callback) => {
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

    res = {
      send: jest.fn(),
    };
    req = {};
  });

  describe("Driver List", () => {
    it("sends driver data", () => {
      controller = HomepageController.DriverList(memberModelMock);
      controller(req, res);
      expect(res.send).toHaveBeenCalled();
    });
  });

  describe("Guest List", () => {
    it("sends guest data", () => {
      controller = HomepageController.GuestList(memberModelMock);
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
});
