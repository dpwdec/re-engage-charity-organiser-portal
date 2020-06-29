const PairingGenome = require('./pairingGenome');

class PairingPopulation {
  constructor(environment) {
    this.members = environment.members;
    this.size = environment.size;
    this.genomes = [];

    console.log(this.members);

    PairingGenome.geneticMaterial = {
      possibleDrivers: [],
      possibleGuests: [],
    }

    this.members.forEach((guest) => {
      console.log(guest);
      PairingGenome.geneticMaterial.possibleGuests.push(guest.name);
    });

    this.members[0].drivers.forEach((driver) => {
      PairingGenome.geneticMaterial.possibleDrivers.push(driver.name);
    });

    console.log(PairingGenome.geneticMaterial);
    // set up pairing genome genetic material
  }

  generaPopulation() {
    for (let index = 0; index < this.size; index++) {
      var newGenome = new PairingGenome();
      newGenome.generateGenes();
      this.genomes.push(newGenome);
    }
  }
}

module.exports = PairingPopulation;