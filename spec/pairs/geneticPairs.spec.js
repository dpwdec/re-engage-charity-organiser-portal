var GeneticPairs = require('../../controllers/pairs/geneticPairs');

describe('Genetic Pairs', () => {
  describe('Generate', () => {
    it('can generate a single pair', () => {
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

      expect(GeneticPairs.generate(data)).toEqual(output);
    });
    it('can pick an equitable route for two pairs', () => {
      var data = [ 
        { name: 'Doris', 
          drivers: [ { 
            name: 'Bradley', 
            distance: 5 
            },
            { 
              name: 'Zeus', 
              distance: 30 
            },
            { 
              name: 'Jake', 
              distance: 3 
            } 
          ]
        },
        { name: 'Petunia', 
          drivers: [ { 
            name: 'Bradley', 
            distance: 10 
            },
            { 
              name: 'Zeus', 
              distance: 1 
            },
            { 
              name: 'Jake', 
              distance: 33 
            } 
          ]
        },
        { name: 'Jean', 
          drivers: [ { 
            name: 'Bradley', 
            distance: 10 
            },
            { 
              name: 'Zeus', 
              distance: 1 
            },
            { 
              name: 'Jake', 
              distance: 11 
            } 
          ]
        },
      ]

      GeneticPairs.generate(data);
    });
  })
});