jest.mock('../../models/member');
jest.mock("@google/maps");
let Member = require('../../models/member');
let GoogleMaps = require("@google/maps");

jest.mock("../../controllers/pairs/shortestDistancePairs");
jest.mock("../../controllers/pairs/averagePairs");
jest.mock("../../controllers/pairs/pairingPopulation");
let ShortestDistancePairs = require("../../controllers/pairs/shortestDistancePairs");
let AveragePairs = require("../../controllers/pairs/averagePairs");
let PairingPopulation = require("../../controllers/pairs/pairingPopulation");

describe("Members Controller", () => {
  let req, res, PairController;

  beforeEach(() => {
    jest.resetModules();
    PairController = require('../../controllers/pairs');

    res = { status: jest.fn() }
    res.status.mockReturnValue({ send: jest.fn() })
    req = { query: { month: "July" } };
  });

  describe("Pairing", () => {
    it("Generates a set of pairs using the shortest path algorithm", async () => {
      PairController.availableMembers = jest.fn();
      PairController.calculatePairDistances = jest.fn();
      PairController.calculatePairDistances.mockReturnValue(Promise.resolve({ members: "data" }));
      ShortestDistancePairs.generate.mockReturnValue({ route: "data" });
      controller = PairController.Pairing(Member, jest.fn(), ShortestDistancePairs, jest.fn(), jest.fn());
      req.query.pairingType = "shortest";

      await controller(req, res);

      expect(PairController.availableMembers).toHaveBeenCalled();
      expect(PairController.calculatePairDistances).toHaveBeenCalled();
      expect(ShortestDistancePairs.generate).toHaveBeenCalledWith({ members: "data" });
      expect(res.status().send).toHaveBeenCalledWith({ pairs: { route: "data" } });
    });

    it("Generates a set of pairs using the average path algorith", async () => { 
      PairController.availableMembers = jest.fn();
      PairController.calculatePairDistances = jest.fn();
      PairController.calculatePairDistances.mockReturnValue(Promise.resolve({ members: "data" }));
      AveragePairs.generate.mockReturnValue({ route: "data" });
      controller = PairController.Pairing(Member, jest.fn(), jest.fn(), AveragePairs, jest.fn());
      req.query.pairingType = "average";

      await controller(req, res);

      expect(PairController.availableMembers).toHaveBeenCalled();
      expect(PairController.calculatePairDistances).toHaveBeenCalled();
      expect(AveragePairs.generate).toHaveBeenCalledWith({ members: "data" });
      expect(res.status().send).toHaveBeenCalledWith({ pairs: { route: "data" } });
    });

    it("Generates a set of pairs using the smart path algorithm", async () => {
      PairController.availableMembers = jest.fn();
      PairController.calculatePairDistances = jest.fn();
      PairController.calculatePairDistances.mockReturnValue(Promise.resolve({ members: "data" }));
      PairingPopulation.generate.mockReturnValue({ route: "data" });
      controller = PairController.Pairing(Member, jest.fn(), jest.fn(), jest.fn(), PairingPopulation);
      req.query.pairingType = "smart";

      await controller(req, res);

      expect(PairController.availableMembers).toHaveBeenCalled();
      expect(PairController.calculatePairDistances).toHaveBeenCalled();
      expect(PairingPopulation.generate).toHaveBeenCalledWith({ members: "data" });
      expect(res.status().send).toHaveBeenCalledWith({ pairs: { route: "data" } });
    });
  });

  describe("availableMembers", () => {
    it("Returns a list of  available drivers and guests by date", async () => {
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

      let availableMembers = await PairController.availableMembers(Member, "July 2020");

      expect(availableMembers.drivers.length).toEqual(1);
      expect(availableMembers.guests.length).toEqual(1);
      expect(Member.find).toHaveBeenCalled();
    });
  });

  describe("calculatePairDistances", () => {
    it("returns a list of guests with distances to drivers", async () => {
      // Arrange
      GoogleMaps.createClient.mockReturnValue({ directions: jest.fn() });
      GoogleMaps.createClient().directions.mockReturnValue({ asPromise: jest.fn() })
      GoogleMaps.createClient().directions().asPromise.mockReturnValue(
        Promise.resolve(
          {
            json: {
              routes: [
                {
                  legs: [
                    {
                      distance: {
                        value: 20
                      }
                    }
                  ]
                }
              ]
            }
          }
        )
      );
      let availableMembers = {
        guests: [
          {
            name: "Doris",
            telephone: "xxxxx",
            address: "X1 XXX"
          }
        ],
        drivers: [
          {
            name: "Bradley",
            address: "X2 XXX"
          },
          {
            name: "Zeus",
            address: "X3 XXX"
          },
        ]
      };

      // Act
      let members = await PairController.calculatePairDistances(GoogleMaps, availableMembers);
      
      // Assert
      expect(members.length).toEqual(1);
      expect(members[0].drivers.length).toEqual(2);
      expect(members[0].drivers[1].distance).toEqual(20);
    });
  });

  describe("mapsPairApiRequest", () => {
    it("adds the distance between guest and driver to a member", async () => {
      // Arrange
      GoogleMaps.createClient.mockReturnValue({ directions: jest.fn() });
      GoogleMaps.createClient().directions.mockReturnValue({ asPromise: jest.fn() })
      GoogleMaps.createClient().directions().asPromise.mockReturnValue(
        Promise.resolve(
          {
            json: {
              routes: [
                {
                  legs: [
                    {
                      distance: {
                        value: 20
                      }
                    }
                  ]
                }
              ]
            }
          }
        )
      );
      let member = {
        name: "Doris",
        telephone: "x",
        drivers: [],
      };
      let guest = {
        address: "X1 XXX"
      }
      let driver = {
        name: "Bradley",
        address: "X2 XXX"
      }

      // Act
      let result = await Promise.resolve(
        PairController.mapsPairApiRequest(GoogleMaps.createClient(), member, guest, driver)
      );

      // Assert
      expect(member.drivers[0].name).toEqual("Bradley");
    });
  })
});