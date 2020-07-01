const PairingGenome = require('./pairingGenome');

class PairingPopulation {
  constructor(environment) {
    this.members = environment.members;
    this.size = environment.size;
    this.matingPoolSize = environment.matingPoolSize;
    this.mutationRate = environment.mutationRate;
    this.genomes = [];
    this.matingPool = [];

    PairingGenome.geneticMaterial = {
      possibleDrivers: [],
      possibleGuests: [],
    }

    this.members.forEach((guest) => {
      PairingGenome.geneticMaterial.possibleGuests.push(guest.name);
    });

    this.members[0].drivers.forEach((driver) => {
      PairingGenome.geneticMaterial.possibleDrivers.push(driver.name);
    });

    PairingGenome.members = this.members;
  }

  generatePopulation() {
    for (let index = 0; index < this.size; index++) {
      var newGenome = new PairingGenome();
      newGenome.generateGenes();
      this.genomes.push(newGenome);
    }
  }

  /*
  Trigger calculate fitness for every genome in the population
  */
  calculatePopulationFitness() {
    this.genomes.forEach((genome) => {
      genome.calculateFitness();
    });
  }

  generateMatingPool() {
        // Add all fitness values for the population together to get populations total fitness
    // Subtract the individuals average speed from the total population fitness to get that
    // Individual's representative fitness
    // Divide the individual's fitness by the total population fitness
    // Map the percentage to an array of members.

    // Calculation total population fitness
    var populationFitness = 0;
    this.genomes.forEach((genome) => {
      populationFitness += genome.fitness;
    });

    // Calculate genome's representative fitness score
    // The lower the genome's fitness the higher its representation score
    // Add up all the representative fitness scores to get total representative population fitness
    var representativePopulationFitness = 0;
    this.genomes = this.genomes.map((genome) => {
      genome.representativeFitness = populationFitness - genome.fitness
      representativePopulationFitness += genome.representativeFitness;
      return genome;
    });

    // map each genome to a percentage representation in the mating pool
    this.genomes = this.genomes.map((genome) => {
      genome.matingPoolRepresentation = genome.representativeFitness/representativePopulationFitness;
      return genome;
    });

    this.matingPool = [];

    this.genomes.forEach((genome, index) => {
      var matingPoolSpots = this.matingPoolSize * genome.matingPoolRepresentation;
      for(var i = 0; i < matingPoolSpots; i++) {
        this.matingPool.push(index);
      }
    });
  }

  // untested
  breedGenomes() {
    var nextGeneration = [];
    for(var i = 0; i < this.size; i++) {
      //pick two random index from mating pool
      var male = this.genomes[Math.floor(Math.random() * this.genomes.length)];
      var female = this.genomes[Math.floor(Math.random() * this.genomes.length)];
      var child = male.mateWith(female);

      nextGeneration.push(child);
    }
    this.genomes = nextGeneration;
  }

  findBestGenome() {
    var bestGenome = {fitness: 10000000};
    this.genomes.forEach((genome) => {
      if(genome.fitness < bestGenome.fitness) {
        bestGenome = genome;
      }
    });
    return bestGenome;
  }

  mutatePopuation() {
    this.genomes.forEach((genome) => {
      if(Math.random < this.mutationRate) {
        genome.mutate();
      }
    })
  }
}

PairingPopulation.generate = (members) => {

  population = new PairingPopulation({members: members, size: 500, matingPoolSize: 100, mutationRate: 0.01});
  population.generatePopulation();

  for(var i = 0; i < 100; i++) {
    population.calculatePopulationFitness();
    population.generateMatingPool();
    population.breedGenomes();
    population.mutatePopuation();
  }
  population.calculatePopulationFitness();
  var bestSolution = population.findBestGenome().genes;
  bestSolution.forEach((pair, index) => {
    pair.id = index;
  })
  return bestSolution;
  //console.log(population.genomes);
}

module.exports = PairingPopulation;