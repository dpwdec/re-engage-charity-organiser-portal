let AdminController = require("../../controllers/admin");
const { result } = require("lodash");

describe("Admin Controller", () => {
  describe("Login", () => {
    it("sends database error", () => {
      var mockAdminModel = {
        findOne: (query, callback) => {
          var err = { body: "error" };
          var result = {};
          callback(true, result);
        },
      };

      var res = { send: jest.fn() };
      var req = { body: { adminName: "mock", password: "mock" } };

      controller = AdminController.Login(mockAdminModel);
      controller(req, res);

      expect(res.send).toHaveBeenCalledWith({
        success: false,
        message: "Datebase error",
      });
    });

    it("logs in successfully", () => {
      var mockAdminModel = {
        findOne: (query, callback) => {
          var err = false;
          var result = { adminName: "admin", password: "1234" };
          callback(err, result);
        },
      };

      var res = { send: jest.fn() };
      var req = { body: { adminName: "admin", password: "1234" } };
      controller = AdminController.Login(mockAdminModel);
      controller(req, res);
      expect(res.send).toHaveBeenCalledWith({
        success: true,
        message: "Valid log in",
        admin: { adminName: "admin", password: "1234" },
      });
    });

    it("Wrong password", () => {
      var mockAdminModel = {
        findOne: (query, callback) => {
          var err = false;
          var result = { adminName: "admin", password: "1235" };
          callback(err, result);
        },
      };

      var res = { send: jest.fn() };
      var req = { body: { adminName: "admin", password: "1234" } };
      controller = AdminController.Login(mockAdminModel);
      controller(req, res);
      expect(res.send).toHaveBeenCalledWith({
        success: false,
        message: "Wrong password",
      });
    });
  });
});
