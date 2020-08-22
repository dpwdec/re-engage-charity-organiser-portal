const AvailabilityController = require('../../controllers/availability');

describe("Availability Controller", () => {
  describe("Availability", () => {
    it("sends members data and current months", () => {
      /*
      // Previous implementation:
      const Member = {
          find: () => { 
              return { lean: () => { return { exec: (callback) => callback(false, {}) } } }
          }
      */
      const Member = { find: jest.fn() };
      Member.find.mockReturnValue({ lean: jest.fn() });
      Member.find().lean.mockReturnValue({ exec: (callback) => callback(false, {})});

      controller = AvailabilityController.Availability(Member);

      let req = { query: { role: 'driver' } }
      let res = { send: jest.fn() };

      controller(req, res);

      expect(res.send).toHaveBeenCalledWith({ members: {}, months: ["Aug 2020", "Sep 2020", "Oct 2020", "Nov 2020"] });

    });
  });
});