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

    it('can generate two pairs by distance', () => {

      var data = [ 
        { name: 'Doris', 
          drivers: [ 
            { 
              name: 'Bradley', 
              distance: 8000 
            },
            { 
              name: 'Zeus', 
              distance: 2000 
            }
          ]
        },
        { name: 'Kimothey', 
          drivers: [ 
            { 
              name: 'Bradley', 
              distance: 6000 
            },
            { 
              name: 'Zeus', 
              distance: 3000 
            }
          ]
        }
      ]

      var output = [
        { id: 1, driver: 'Zeus', guest: 'Doris', distance: 2000 },
        { id: 2, driver: 'Bradley', guest: 'Kimothey', distance: 6000 }
      ]

      expect(PairController._generatePairsByDistance(data)).toEqual(output)

    });

  });
});