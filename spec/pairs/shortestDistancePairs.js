var ShortestDistancePairs = require("../../controllers/pairs/shortestDistancePairs");

describe('Pair Controller', () => {

  describe('.generate', () => {

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

      expect(ShortestDistancePairs.generate(data)).toEqual(output)

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

      expect(ShortestDistancePairs.generate(data)).toEqual(output)

    });

    it('can generate multiple pairs by distance', () => {

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
            },
            {
              name: 'Kevin',
              distance: 3000
            },
            {
              name: 'Gwen',
              distance: 10000
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
            },
            {
              name: 'Kevin',
              distance: 500
            },
            {
              name: 'Gwen',
              distance: 5000
            }
          ]
        },
        { name: 'Perry', 
          drivers: [ 
            { 
              name: 'Bradley', 
              distance: 300 
            },
            { 
              name: 'Zeus', 
              distance: 10000 
            },
            {
              name: 'Kevin',
              distance: 600
            },
            {
              name: 'Gwen',
              distance: 100
            }
          ]
        },
        { name: 'Petunia', 
          drivers: [ 
            { 
              name: 'Bradley', 
              distance: 300 
            },
            { 
              name: 'Zeus', 
              distance: 400 
            },
            {
              name: 'Kevin',
              distance: 6000
            },
            {
              name: 'Gwen',
              distance: 5000
            }
          ]
        }
      ]

      var output = [
        { id: 1, driver: 'Gwen', guest: 'Perry', distance: 100 },
        { id: 2, driver: 'Bradley', guest: 'Petunia', distance: 300 },
        { id: 3, driver: 'Kevin', guest: 'Kimothey', distance: 500 },
        { id: 4, driver: 'Zeus', guest: 'Doris', distance: 2000 }
      ]

      expect(ShortestDistancePairs.generate(data)).toEqual(output)

    });


  });
});