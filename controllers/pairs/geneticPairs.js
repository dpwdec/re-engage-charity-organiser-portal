const PairingPopulation = require('./pairingPopulation');

class GeneticPairs {
  construct(members) {}

  generate() {
    population = new PairingPopulation();
    population.generatePopulation();
    console.log(population.genomes);
  }
}

module.exports = GeneticPairs;