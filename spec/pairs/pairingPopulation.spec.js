var PairingPopulation = require('../../controllers/pairs/pairingPopulation');
const PairingGenome = require('../../controllers/pairs/pairingGenome');

describe('PairingPopulation', () => {
  describe('#constructor', () => {
    var population;
    var members;
    var populationSize;

    beforeEach(() => {
      members = [{
        name: 'Doris',
        drivers:[{
          name: 'Bradley',
          distance: 20
        }]
      }];
      populationSize = 5;
      population = new PairingPopulation({members: members, size: populationSize});
    });

    it('has a list of members after creation', () => {
      expect(population.members).toEqual(members);
    });

    it('has a population size after creation', () => {
      //expect(population.size).toEqual(populationSize);
    });
  });

  describe('#generatePopulation', () => {
    it('can generate a population of PairingGenomes', () => {
      var members = [{
        name: 'Doris',
        drivers:[{
          name: 'Bradley',
          distance: 20
        },{
          name: 'Zeus',
          distance: 50
        }]
      },
      {
        name: 'Jean',
        drivers:[{
          name: 'Bradley',
          distance: 30
        },{
          name: 'Zeus',
          distance: 100
        }]
      }];
      var populationSize = 5;
      var population = new PairingPopulation({members: members, size: populationSize});
      population.generatePopulation();
      //console.log(population.genomes);
      expect(population.genomes[0]).toBeInstanceOf(PairingGenome);
      expect(population.genomes.length).toEqual(5);
    });
  });
});