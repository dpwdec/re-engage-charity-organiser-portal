var GeneticPairs = require('../controllers/pairs/geneticPairs');

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
    })
  })
});