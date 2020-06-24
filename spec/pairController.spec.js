var PairController = require('../controllers/pairs');

describe('Pair Controller', () => {
  describe('.generatePairs', () => {
    it('can generate a single pair', () => {
      var data = {
        drivers: [ {name: 'Bradley'} ],
        guests: [ {name: 'Doris' } ]
      }

      var pairs = [
        {id: 1, driver: 'Bradley', guest: 'Doris'}
      ]
      

      expect(PairController.generatePairs(data)).toEqual(pairs);
    });
  });
});

/*

INPUT --> {}

{
  drivers: [ {name: 'Bradley'} ],
  guests: [ {name: 'Doris' } ]
}

OUTPUT -->

[
  {id: 1, driver: 'Bradley', guest: 'Doris'}
]



*/