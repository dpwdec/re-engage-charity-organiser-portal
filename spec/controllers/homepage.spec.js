jest.mock('../../models/member');
const Member = require('../../models/member');

var HomepageController = require("../../controllers/homepage");

describe("Homepage Controller", () => {
  let res, req;

  beforeEach(() => {
    res = { status: jest.fn() }
    res.status.mockReturnValue({ send: jest.fn() })
    req = {};
  });

  describe("Index", () => {
    it("checks home page", () => {
      var res = { render: jest.fn() };
      index = HomepageController.Index(req, res);
      expect(res.render).toHaveBeenCalledWith("index");
    });
  });
});
