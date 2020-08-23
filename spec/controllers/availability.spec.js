jest.mock('../../controllers/helperFunctions');
jest.mock('../../models/member');

const AvailabilityController = require('../../controllers/availability');
const HelperFunctions = require('../../controllers/helperFunctions');
const Member = require('../../models/member');

describe("Availability Controller", () => {
  describe("Availability", () => {
    it("sends members data and current months", async () => {
      // Previous implementation:
      // const Member = { find: () => ({ lean: () => ({ exec: (callback) => callback(false, {}) }) }) }

      // const Member = { find: jest.fn() };
      // Member.find.mockReturnValue({ lean: jest.fn() });
      // Member.find().lean.mockReturnValue({ exec: (callback) => callback(false, Object.create(null)) });

      // const HelperFunctions = { getArrayOfCurrentAndNextThreeMonths: jest.fn() };
      // HelperFunctions.getArrayOfCurrentAndNextThreeMonths.mockReturnValue(["Aug 2020", "Sep 2020", "Oct 2020", "Nov 2020"]);

      controller = AvailabilityController.Availability(Member, HelperFunctions);

      let req = { query: { role: 'driver' } }
      let res = { send: jest.fn() };

      await controller(req, res);

      expect(Member.find).toHaveBeenCalledWith({role: 'driver'}, 'name availability');
      expect(res.send).toHaveBeenCalledWith({ members: {}, months: ["Aug 2020", "Sep 2020", "Oct 2020", "Nov 2020"] });
    });
  });
});