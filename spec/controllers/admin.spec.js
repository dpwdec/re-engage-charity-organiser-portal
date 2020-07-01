let AdminController = require("../../controllers/admin");

describe('Admin Controller', () => {
  describe('Login', () => {
    it('sends database error', () => {

      var mockAdminModel = {
        findOne: (query, callback) => {
          var err = {body: 'error'};
          var result = {};
          callback(true, result);
        }
      }

      var res = {
        send: jest.fn()
      }
      var req = { body: { adminName: 'mock', password: 'mock'} };

      controller = AdminController.Login(mockAdminModel);
      controller(req, res);

      expect(res.send).toHaveBeenCalledWith({
        success: false,
        message: "Datebase error",
      });
    });
  });
});
