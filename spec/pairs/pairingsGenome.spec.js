const PairingGenome = require('../../controllers/pairs/pairingGenome');

describe('PairingGenome', () => {
  describe('.geneticMaterial', () => {
    it('has a list of all possible drivers and guests', () => {
      PairingGenome.geneticMaterial = {
        possibleDrivers: [],
        possibleGuests: [],
      }
      expect(PairingGenome.geneticMaterial.possibleDrivers).toEqual([]);
      expect(PairingGenome.geneticMaterial.possibleGuests).toEqual([]);
    });
  });

  describe('#eliminateGene', () => {
    it('eliminates any genes that match the guest component of the targetGene', () => {
      var genome = new PairingGenome();
      genome.genes = [{
        guest: 'Doris',
        driver: 'Bradley'
      }];

      var targetGene = {guest: 'Doris', driver: 'Zeus'};

      genome.eliminateGene(targetGene);
      expect(genome.genes.length).toEqual(0);
    });

    it('eliminates any genes that match the driver component of the targetGene', () => {
      var genome = new PairingGenome();
      genome.genes = [{
        guest: 'Doris',
        driver: 'Bradley'
      }];

      var targetGene = {guest: 'Jean', driver: 'Bradley'};

      genome.eliminateGene(targetGene);
      expect(genome.genes.length).toEqual(0);
    });

    it('eliminates multuple genes that match across driver or guest', () => {
      var genome = new PairingGenome();
      genome.genes = [{
        guest: 'Doris',
        driver: 'Bradley'
      },
      {
        guest: 'Jean',
        driver: 'Zeus'
      }];

      var targetGene = {guest: 'Jean', driver: 'Bradley'};

      genome.eliminateGene(targetGene);
      expect(genome.genes.length).toEqual(0);
    });

    it('leaves other elements of the Jean that do not match untouched', () => {
      var genome = new PairingGenome();
      genome.genes = [{
        guest: 'Doris',
        driver: 'Bradley'
      },
      {
        guest: 'Jean',
        driver: 'Zeus'
      }];

      var targetGene = {guest: 'Marc', driver: 'Bradley'};

      genome.eliminateGene(targetGene);
      expect(genome.genes).toEqual([{ guest: 'Jean', driver: 'Zeus' }]);
    });
  });

  describe('#mate', () => {
    it('can mate with another single member', () => {
      PairingGenome.possibleDrivers = ['Bradley'];
      PairingGenome.possibleGuests = ['Doris'];

      var male = new PairingGenome();
      male.genes = [{
        guest: 'Doris',
        driver: 'Bradley',
        distance: 40
      }];

      var female = new PairingGenome();
      female.genes = [{
        guest: 'Doris',
        driver: 'Bradley',
        distance: 40
      }];

      var child = new PairingGenome();
      child.genes = [{
        guest: 'Doris',
        driver: 'Bradley',
        distance: 40
      }];

      expect(male.mateWith(female)).toEqual(child);
    });

    it('can mate with multiple member genes', () => {
      PairingGenome.geneticMaterial = {
        possibleDrivers: ['Bradley', 'Zeus'],
        possibleGuests: ['Jean', 'Doris'],
      }

      var male = new PairingGenome();
      male.genes = [{
        guest: 'Doris',
        driver: 'Bradley',
        distance: 40
      },
      {
        guest: 'Jean',
        driver: 'Zeus',
        distance: 40
      }];

      var female = new PairingGenome();
      female.genes = [{
        guest: 'Jean',
        driver: 'Zeus',
        distance: 40
        },
        {
        guest: 'Doris',
        driver: 'Bradley',
        distance: 40
      }];

      var child = new PairingGenome();
      child.genes = [
        {
          guest: 'Doris',
          driver: 'Bradley',
          distance: 40
        },
        {
          guest: 'Jean',
          driver: 'Zeus',
          distance: 40
        }];

      // just in the wrong order
      expect(male.mateWith(female)).toEqual(child);
    });

    it('can integrate left over genetic information', () => {
      PairingGenome.geneticMaterial = {
        possibleDrivers: ['Bradley', 'Zeus', 'Kevin'],
        possibleGuests: ['Jean', 'Doris', 'Petunia'],
      }

      var male = new PairingGenome();
      male.genes = [{
        guest: 'Doris',
        driver: 'Bradley',
        distance: 40
      },
      {
        guest: 'Jean',
        driver: 'Zeus',
        distance: 40
      },
      {
        guest: 'Petunia',
        driver: 'Kevin',
        distance: 40
      }];

      var female = new PairingGenome();
      female.genes = [{
        guest: 'Doris',
        driver: 'Kevin',
        distance: 40
        },
        {
        guest: 'Petunia',
        driver: 'Zeus',
        distance: 40
      },
      {
        guest: 'Jean',
        driver: 'Bradley',
        distance: 40
      }];

      var child = new PairingGenome();
      child.genes = [
        {
          guest: 'Doris',
          driver: 'Bradley',
          distance: 40
        },
        {
          guest: 'Petunia',
          driver: 'Zeus',
          distance: 40
        },
        {
          guest: 'Jean',
          driver: 'Kevin',
          distance: 40
        }];

      // just in the wrong order
      expect(male.mateWith(female)).toEqual(child);
    });
  });

  describe('#lookupDistance', () => {
    it('can look up the distance of a driver/guest pair', () => {
      PairingGenome.members = [{
        name: 'Doris',
        drivers: [
          {
            name: 'Bradley',
            distance: 50
          },
          {
            name: 'Zeus',
            distance: 30
          }
        ]
      },
      {
        name: 'Jean',
        drivers: [
          {
            name: 'Bradley',
            distance: 10
          },
          {
            name: 'Zeus',
            distance: 100
          }
        ]
      }];

      genome = new PairingGenome();
      var unfinishedGene = {guest: 'Jean', driver: 'Zeus'};
      var finishedGene = {guest: 'Jean', driver: 'Zeus', distance: 100};
      
      expect(genome.lookupDistance(unfinishedGene)).toEqual(finishedGene);
    });
  });
});