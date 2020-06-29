var _ = require('lodash');

class PairingGenome {
  constructor() {
    this.genes = [];
    this.fitness = undefined;
  }

  /*
  Generates a random set of guest-driver pairing for a genome
  from a set of randomly shuffled drivers and guests.
  */
  generateGenes() {

    var possibleDrivers = _.clone(PairingGenome.geneticMaterial.possibleDrivers);
    var possibleGuests = _.clone(PairingGenome.geneticMaterial.possibleGuests);

    possibleDrivers = this._shuffleArray(possibleDrivers);
    possibleGuests = this._shuffleArray(possibleGuests);

    possibleGuests.forEach((guest, index) => {
      this.genes.push({
        guest: guest, 
        driver: possibleDrivers[index]
      });
    });

    this.genes = this.genes.map((incompleteGene) => {
      this.lookupDistance(incompleteGene);
      return incompleteGene;
    })
  }

  /* 
  Eliminates any gene that has a driver or guest
  in common with it.
  */
  eliminateGene(targetGene) {
    _.remove(this.genes, (gene) => {
      return gene.guest === targetGene.guest || gene.driver === targetGene.driver;
    });
  }
  /*
  Blend the genes of two parents by:
    1. Adding an element to child genome from this
    2. Eliminating those dirver an guest elements from the mate
    3. Eliminating those driver and guests elements from the possible elements list
    4. Repeating steps 1-3 for the mate
    5. Switching back and forth until there are no elements left in the parents
    6. Pair up and merge left over guests and drivers based on the order they appear in the array (RISKY)
  */
  mateWith(mate) {
    var possibleDrivers = _.clone(PairingGenome.geneticMaterial.possibleDrivers);
    var possibleGuests = _.clone(PairingGenome.geneticMaterial.possibleGuests);

    var child = new PairingGenome();
    var flip = true;

    while(true) {
      if(flip) {
        if(this.genes.length > 0) {
          // extract gene from a parent
          //console.log(this.genes[0]);
          var gene = _.head(this.genes);
          //åconsole.log(gene);
          // add gene to the child
          child.genes.push(gene);
          // remove genes that have same driver or guest from the other parents
          mate.eliminateGene(gene);
          // remove guest from possible guests
          _.remove(possibleGuests, (guest) => { return guest === gene.guest });
          // remove driver from possible drivers
          _.remove(possibleDrivers, (driver) => { return driver == gene.driver});
          // remove gene that has been passed onto child from parent
          this.genes.splice(0, 1);
        }
      } else {
        if(mate.genes.length > 0) {
          var gene = _.head(mate.genes);
          child.genes.push(gene);
          this.eliminateGene(gene);
          _.remove(possibleGuests, (guest) => { return guest === gene.guest });
          _.remove(possibleDrivers, (driver) => { return driver == gene.driver});
          mate.genes.splice(0, 1);
        }
      }

      flip = !flip;
      if(this.genes.length == 0 && mate.genes.length == 0) {
        break;
      }
    }
    
    possibleGuests.forEach((guest, index) => {
      var leftoverGene = {guest: guest, driver: possibleDrivers[index] }
      leftoverGene = this.lookupDistance(leftoverGene);
      child.genes.push(leftoverGene);
    });

    return child;
  }

  /*
  Find the distance for a arbitrary guest-driver pairing.
  */
  lookupDistance(incompleteGene) {
    PairingGenome.members.forEach((guest) => {
      if(incompleteGene.guest === guest.name) {
        guest.drivers.forEach((driver) => {
          if(incompleteGene.driver === driver.name) {
            incompleteGene.distance = driver.distance;
            return;
          }
        });
      }
    });
    return incompleteGene;
  }

  /*
  Calculates the fitness for this genome and adds its as a
  fitness property.
  */
  calculateFitness() {
    var totalDistance = 0;
    this.genes.forEach((gene) => {
      totalDistance += gene.distance;
    });
    this.fitness = (totalDistance / this.genes.length);
  }

  _shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
  }
}

module.exports = PairingGenome;