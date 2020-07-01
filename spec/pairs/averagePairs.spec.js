const AveragePairs = require('../../controllers/pairs/averagePairs');

describe('AveragePairs', () => {
  describe('generate', () => {
    it('can generate pairings by lowest possible average distance', () => {
      var data = [ 
        { name: 'a', 
          drivers: [ 
            { 
              name: 'd', 
              distance: 8000 
            },
            { 
              name: 'e', 
              distance: 2000 
            },
            {
              name: 'f',
              distance: 3000
            }
          ]
        },
        { name: 'b', 
          drivers: [ 
            { 
              name: 'd', 
              distance: 1000 
            },
            { 
              name: 'e', 
              distance: 4000 
            },
            {
              name: 'f',
              distance: 5000
            }
          ]
        },
        { name: 'c', 
          drivers: [ 
            { 
              name: 'd', 
              distance: 1000 
            },
            { 
              name: 'e', 
              distance: 3000 
            },
            {
              name: 'f',
              distance: 500
            }
          ]
        }
      ]

      var output = [
        { id: 1, driver: 'e', guest: 'a', distance: 2000, route: undefined },
        { id: 2, driver: 'f', guest: 'c', distance: 500, route: undefined },
        { id: 3, driver: 'd', guest: 'b', distance: 1000, route: undefined },
      ]

      expect(AveragePairs.generate(data)).toEqual(output);
    });
  });
});