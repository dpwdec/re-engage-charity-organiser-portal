var RandomPairs = require("../../controllers/pairs/randomPairs");

describe("Pair Controller", () => {
  describe(".generate", () => {
    it("can generate a single pair", () => {
      var data = {
        drivers: [{ name: "Bradley" }],
        guests: [{ name: "Doris" }],
      };

      var pairs = [{ id: 1, driver: "Bradley", guest: "Doris" }];

      expect(RandomPairs.generate(data)).toEqual(pairs);
    });

    it("can generate two pairs", () => {
      var data = {
        drivers: [{ name: "Bradley" }, { name: "Zeus" }],
        guests: [{ name: "Doris" }, { name: "Kimothey" }],
      };

      var mixedData = {
        drivers: [{ name: "Bradley" }, { name: "Zeus" }],
        guests: [{ name: "Doris" }, { name: "Kimothey" }],
      };

      jest.spyOn(RandomPairs, "_mixMembers").mockReturnValue(mixedData);

      var pairs = [
        { id: 1, driver: "Bradley", guest: "Doris" },
        { id: 2, driver: "Zeus", guest: "Kimothey" },
      ];

      expect(RandomPairs.generate(data)).toEqual(pairs);
    });

    it("can generate multiple pairs", () => {
      var data = {
        drivers: [{ name: "Bradley" }, { name: "Zeus" }, { name: "Kevin" }],
        guests: [{ name: "Doris" }, { name: "Kimothey" }, { name: "Perry" }],
      };

      var mixedData = {
        drivers: [{ name: "Bradley" }, { name: "Zeus" }, { name: "Kevin" }],
        guests: [{ name: "Kimothey" }, { name: "Perry" }, { name: "Doris" }],
      };

      jest.spyOn(RandomPairs, "_mixMembers").mockReturnValue(mixedData);
      //have a test that checks that _mixMembers calls _shuffleArray

      var pairs = [
        { id: 1, driver: "Bradley", guest: "Kimothey" },
        { id: 2, driver: "Zeus", guest: "Perry" },
        { id: 3, driver: "Kevin", guest: "Doris" },
      ];

      expect(RandomPairs.generate(data)).toEqual(pairs);
    });

    it("Pair controller _mixMembers is called when generating pairs", () => {
      var mixMemberSpy = jest.spyOn(RandomPairs, "_mixMembers");

      var data = {
        drivers: [{ name: "Bradley" }],
        guests: [{ name: "Doris" }],
      };

      RandomPairs.generate(data);

      expect(mixMemberSpy).toHaveBeenCalled();
    });
  });
});
