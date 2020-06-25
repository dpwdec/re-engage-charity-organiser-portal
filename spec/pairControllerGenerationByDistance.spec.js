var PairController = require("../controllers/pairs");

describe('Pair Controller', () => {

  describe('._generatePairsByDistance', () => {

    it('can generate a single pair with distance', () => {

      var data = [ 
        { name: 'Doris', 
          drivers: [ { 
            name: 'Bradley', 
            distance: 8000 
            } 
          ]
        }
      ]

      var output = [
        { id: 1, driver: 'Bradley', guest: 'Doris', distance: 8000 }
      ]

      expect(PairController._generatePairsByDistance(data)).toEqual(output)

    });
  });
});