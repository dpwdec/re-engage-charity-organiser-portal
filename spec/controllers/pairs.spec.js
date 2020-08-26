jest.mock('../../models/member');
jest.mock("@google/maps")
let Member = require('../../models/member');
let GoogleMaps = require("@google/maps");

let PairController = require('../../controllers/pairs');

describe("Members Controller", () => {
  let req, res;

  beforeEach(() => {
    res = { status: jest.fn() }
    res.status.mockReturnValue({ send: jest.fn() })
    req = { query: { month: "July" } };

    let members = [
      { name: "Doris", role: "guest", telephone: "0", address: "X", availability: {
          "July 2020": true
        }
      },
      { name: "Petunia", role: "guest", telephone: "0", address: "X", availability: {
          "July 2020": false
        }
      },
      { name: "Bradley", role: "driver", telephone: "0", address: "X", availability: {
          "July 2020": false
        }
      },
      { name: "Zeus", role: "driver", telephone: "0", address: "X", availability: {
          "July 2020": true
        }
     },
    ]
    Member.find().lean.mockReturnValue({ exec: () => Promise.resolve(members) });
  });

  // describe("Pairing", () => {
  //   it("Generates a set of pairs using the shortest path algorithm", async () => {
  //     controller = PairController.Pairing(Member, GoogleMaps);

  //     await controller(req, res);

  //     expect(Member.find).toHaveBeenCalled();
  //   });
  // });

  describe("availableMembers", () => {
    it("Returns a list of  available drivers and guests by date", async () => {
      let availableMembers = await PairController.availableMembers(Member, "July 2020");

      expect(availableMembers.drivers.length).toEqual(1);
      expect(availableMembers.guests.length).toEqual(1);
      expect(Member.find).toHaveBeenCalled();
    });
  });
});