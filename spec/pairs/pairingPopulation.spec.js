const _ = require('lodash');
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
      expect(population.genomes[0]).toBeInstanceOf(PairingGenome);
      expect(population.genomes.length).toEqual(5);
    });
  });

  describe('#calculatePopulationFitness', () => {
    it('can calculate an entire population fitness', () => {
      var members = [{
        name: 'Doris',
        drivers:[{
          name: 'Bradley',
          distance: 20
        }]
      }];

      population = new PairingPopulation({members: members, size: 5});

      population.genomes = [];

      for (let index = 0; index < 10; index++) {
        var newGenome = new PairingGenome();
        newGenome.genes = [
          {
            guest: 'Doris', driver: 'Bradley', distance: 10
          },
          {
            guest: 'Jean', driver: 'Zeus', distance: 3
          },
          {
            guest: 'Petunia', driver: 'Kevin', distance: 17
          },
        ]
        population.genomes.push(newGenome);
      }
  
      population.calculatePopulationFitness();
      expect(population.genomes[5].fitness).toEqual(10);
    });
  });

  describe('#generateMatingPool', () => {
    it('can generate a mating pool', () => {
      var members = [{
        name: 'Doris',
        drivers:[{
          name: 'Bradley',
          distance: 20
        }]
      }];
  
      population = new PairingPopulation({members: members, size: 5, matingPoolSize: 15});
      population.genomes = [];
  
      bigGenome = new PairingGenome();
      bigGenome.fitness = 5;
      smallGenome = new PairingGenome();
      smallGenome.fitness = 10;
  
      population.genomes.push(bigGenome);
      population.genomes.push(smallGenome);
  
      population.generateMatingPool();
  
      var popCount = _.countBy(population.matingPool, Math.floor);
      expect(popCount['0']).toEqual(10);
    });
  });

  describe('.generate', () => {
    it('can generate a solution', () => {
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
      PairingPopulation.generate(data);
    });
  });
});