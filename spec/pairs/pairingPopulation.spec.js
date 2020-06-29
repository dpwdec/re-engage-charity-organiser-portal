var PairingPopulation = require('../../controllers/pairs/pairingPopulation');

describe('PairingPopulation', () => {
  describe('#constructor', () => {
    it('has a list of members after creation', () => {
      var members = {
        guest: 'Doris',
        drivers:[{
          name: 'Bradley',
          distance: 20
        }]
      }
      var population = new PairingPopulation({members: members});
      expect(population.members).toEqual(members);
    });
  });
});