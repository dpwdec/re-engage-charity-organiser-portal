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

    it('can generate two pairs', () => {
      var data = {
        drivers: [ {name: 'Bradley'}, {name: 'Zeus'} ],
        guests: [ {name: 'Doris' }, { name: 'Kimothey' } ]
      }

      var pairs = [
        {id: 1, driver: 'Bradley', guest: 'Doris'},
        {id: 2, driver: 'Zeus', guest: 'Kimothey'}
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

{
  drivers: [ {name: 'Bradley'}, {driver: 'Zeus'} ],
  guests: [ {name: 'Doris' }, { name: 'Kimothey' } ]
}

OUTPUT -->

[
  {id: 1, driver: 'Bradley', guest: 'Doris'}
]

[
  {id: 1, driver: 'Bradley', guest: 'Doris'}
  {id: 1, driver: 'Zeus', guest: 'Kimothey'}
]



*/