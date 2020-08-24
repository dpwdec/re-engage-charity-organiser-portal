jest.mock('../../controllers/helperFunctions');
jest.mock('../../models/member');

const AvailabilityController = require('../../controllers/availability');
const HelperFunctions = require('../../controllers/helperFunctions');
const Member = require('../../models/member');

describe("Availability Controller", () => {
  let res, req;

  beforeEach(() => {
    res = { status: jest.fn() };
    res.status.mockReturnValue({ send: jest.fn() });
    req = { query: { role: 'driver' } }
  });

  describe("Availability", () => {
    it("sends members data and current months", async () => {
      controller = AvailabilityController.Availability(Member, HelperFunctions);

      await controller(req, res);

      expect(Member.find).toHaveBeenCalledWith({role: 'driver'}, 'name availability');
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.status().send).toHaveBeenCalledWith({ members: {}, months: ["Aug 2020", "Sep 2020", "Oct 2020", "Nov 2020"] });
    });

    it("sends error && status code 500 if retrieving availabilities fails", async () => {
      Member.find().lean.mockReturnValue({ exec: () => Promise.reject(new Error()) });
      controller = AvailabilityController.Availability(Member, HelperFunctions);

      await controller(req, res);

      expect(Member.find).toHaveBeenCalledWith({role: 'driver'}, 'name availability');
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.status().send).toHaveBeenCalledWith({message: "Error" });
    });
  });
});