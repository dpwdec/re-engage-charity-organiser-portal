const PairingGenome = require('./pairingGenome');

class PairingPopulation {
  constructor(environment) {
    this.members = environment.members;
    this.size = environment.size;
    this.genomes = [];

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
}

module.exports = PairingPopulation;