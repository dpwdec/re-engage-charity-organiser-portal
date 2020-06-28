var _ = require('lodash');

class PairingGenome {
  constructor() {
    this.genes = [];
  }

  /* 
  Eliminates any gene that has a driver or guest
  in common with it.
  */
  eliminateGene(targetGene) {
    _.remove(this.genes, (gene) => {
      return gene.guest === targetGene.guest || gene.driver === targetGene.driver;
    })
  }

  mateWith(mate) {
    // Add an element from male
    // Elimate those elements from female
    // Elimate those elements from possible elements list
    // Add an element from female
    // Elimate those elements from male
    // Elimate those elements from possible elements list
    // Eepeat until no elements left
    // Randomly merge left over elements

    var possibleDrivers = _.clone(PairingGenome.geneticMaterial.possibleDrivers);
    var possibleGuests = _.clone(PairingGenome.geneticMaterial.possibleGuests);

    var child = new PairingGenome();
    var flip = true;

    while(true) {
      if(flip) {
        if(this.genes.length > 0) {
          // extract gene from a parent
          var gene = _.head(male)
          // add gene to the child
          child.genes.push(gene);
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
          child.genes.push(_.head(female));
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
  }
}

module.exports = PairingGenome;