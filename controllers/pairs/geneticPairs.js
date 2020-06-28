class GeneticPairs {
  constructor(members) {
    this.members = members;
    this.POPULATION_SIZE = 50; 

    this.drivers = [];
    this.guests = [];

    members.forEach((guest) => {
      this.guests.push(guest.name);
    });

    members[0].drivers.forEach((driver) => {
      this.drivers.push(driver.name);
    });
    
    var population = this._generatePopulation();
    console.log(this._calculatePopulationFitness(population));
  }

  _rankPopulationFitness(population, fitnessValues) {
    // rank all duplicate fitnesses the same
    // the genomes with the highest fitness will get the biggest slice of the pie
    // 
  }

  _calculatePopulationFitness(population) {
    var fitnessValues = [];
    population.forEach((genome) => {
      fitnessValues.push(this._calculateFitnessValue(genome));
    });
    return fitnessValues;
  }

  _calculateFitnessValue(genome) {
    var totalDistance = 0;
    genome.forEach((gene) => {
      totalDistance += gene.distance;
    });
    return (totalDistance / genome.length);
  }

  _generatePopulation() {
    var population = [];
    for (let index = 0; index < this.POPULATION_SIZE; index++) {
      population.push(this._generateGenome());
    }
    return population;
  }

  _generateGenome = () => {
    var genome = [];
  
    var shuffledDrivers = this._shuffleArray(this.drivers);
    var shuffledGuests = this._shuffleArray(this.guests);
  
    shuffledGuests.forEach((guest, index) => {
      var gene = {};
      this.members.forEach((guestMember) => {
        if(guest === guestMember.name) {
          guestMember.drivers.forEach((driverMember) => {
            if(shuffledDrivers[index] === driverMember.name) {
              gene.guest = guest;
              gene.driver = driverMember.name;
              gene.distance = driverMember.distance;
              genome.push(gene);
            };
          });
        }
      });
    });
    return genome;
  }

  _shuffleArray = (array) => {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
  }
}

GeneticPairs.generate = (members) => {

  generatePairs = new GeneticPairs(members);

  return [{
    id: 1,
    guest: members[0].name,
    driver: members[0].drivers[0].name,
    distance: members[0].drivers[0].distance,
  }]
}

module.exports = GeneticPairs;
