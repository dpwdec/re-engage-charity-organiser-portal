var _ = require('lodash');

class GeneticPairs {
  constructor(members) {
    this.members = members;
    this.POPULATION_SIZE = 5; 

    this.drivers = [];
    this.guests = [];

    members.forEach((guest) => {
      this.guests.push(guest.name);
    });

    members[0].drivers.forEach((driver) => {
      this.drivers.push(driver.name);
    });
    
    var population = this._generatePopulation();
    population = this._calculatePopulationFitness(population);
    var matingPool = this._generateMatingPool(population);
    //console.log(population);
    this._mate(population[0], population[1]);
  }

  _mate(male, female) {
    // Add an element from male
    // Elimate those elements from female
    // Elimate those elements from possible elements list
    // Add an element from female
    // Elimate those elements from male
    // Elimate those elements from possible elements list
    // Eepeat until no elements left
    // Randomly merge left over elements

    console.log(male);
    // console.log(_.head(male));
    console.log(female);
    // console.log(_.head(female));

    var possibleDrivers = _.clone(this.drivers);
    var possibleGuests = _.clone(this.guests);

    var child = [];
    var flip = true;

    while(true) {
      if(flip) {
        if(male.length > 0) {
          // extract gene from a parent
          var gene = _.head(male)
          // add gene to the child
          child.push(gene);
          // remove genes that have same driver or guest from the other parents
          female = this._elimateDriversOrGuests(female, _.head(male));
          // remove guest from possible guests
          _.remove(possibleGuests, (guest) => { return guest === gene.guest });
          // remove driver from possible drivers
          _.remove(possibleDrivers, (driver) => { return driver == gene.driver});
          male.splice(0, 1);
        }
      } else {
        if(female.length > 0) {
          child.push(_.head(female));
          male = this._elimateDriversOrGuests(female, _.head(female));
          possibleGuests = this._elimateFromAllPossibleGuests(possibleGuests, _.head(female));
          possibleDrivers = this._elimatePossibleDrivers(possibleDrivers, _.head(female));
          female.splice(0, 1);
        }
      }

      flip = !flip;

      if(male.length == 0 && female.length == 0) {
        break;
      }
    }

    console.log(possibleGuests);
    console.log(possibleDrivers);
    console.log(child);

    // add remaining guests and drivers to child.
    possibleGuests.forEach((guest) => {
      
    });

    return child;
  }

  _elimateFromAllPossibleGuests(possibleGuests, pair) {
    possibleGuests = possibleGuests.map((guest) => {
      if(guest === pair.guest) {
        return false;
      } else {
        return guest;
      }
    });
    return _.compact(possibleGuests);
  }

  _elimatePossibleDrivers(possibleDrivers, pair) {
    possibleDrivers = possibleDrivers.map((driver) => {
      if(driver === pair.driver) {
        return false;
      } else {
        return driver;
      }
    });
    return _.compact(possibleDrivers);
  }

  _elimateDriversOrGuests(genome, pair) {
    genome = genome.map((gene) => {
      if(gene.guest === pair.guest || gene.driver === pair.driver) {
        return false;
      } else {
        return gene;
      }
    });

    genome = _.compact(genome);

    return genome;
  }

  _containsElementAlready(target, element) {
    target.forEach((x) => {
      if(x.guest === element || x.driver === element) {
        return true;
      }
    });
    return false;
  }

  _generateMatingPool(population) {
    // Add all fitness values for the population together to get populations total fitness
    // Subtract the individuals average speed from the total population fitness to get that
    // Individual's representative fitness
    // Divide the individual's fitness by the total population fitness
    // Map the percentage to an array of members.

    // Calculation total population fitness
    var populationFitness = 0;
    population.forEach((genome) => {
      populationFitness += genome.fitness;
    });

    // Calculate genome's representative fitness score
    // The lower the genome's fitness the higher its representation score
    // Add up all the representative fitness scores to get total representative population fitness
    var representativePopulationFitness = 0;
    population = population.map((genome) => {
      genome.representativeFitness = populationFitness - genome.fitness
      representativePopulationFitness += genome.representativeFitness;
      return genome;
    });

    // map each genome to a percentage representation in the mating pool
    population = population.map((genome) => {
      genome.matingPoolRepresentation = genome.representativeFitness/representativePopulationFitness;
      return genome;
    });

    var matingPool = [];
    var MATINGPOOL_SIZE = 50;

    population.forEach((genome, index) => {
      var matingPoolSpots = MATINGPOOL_SIZE * genome.matingPoolRepresentation;
      for(var i = 0; i < matingPoolSpots; i++) {
        matingPool.push(index);
      }
    });

    return matingPool;
  }

  _calculatePopulationFitness(population) {
    return population.map((gene) => {
      gene.fitness = this._calculateFitnessValue(gene);
      return gene;
    });
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
