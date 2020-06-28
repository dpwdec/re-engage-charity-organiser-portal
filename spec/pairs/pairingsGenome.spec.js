const PairingsGenome = require('../../controllers/pairs/pairingGenome');

describe('PairingsGenome', () => {
  describe('.geneticMaterial', () => {
    it('has a list of all possible drivers and guests', () => {
      PairingsGenome.geneticMaterial = {
        possibleDrivers: [],
        possibleGuests: [],
      }
      expect(PairingsGenome.geneticMaterial.possibleDrivers).toEqual([]);
      expect(PairingsGenome.geneticMaterial.possibleGuests).toEqual([]);
    });
  });

  describe('#eliminateGene', () => {
    it('eliminates any genes that match the guest component of the targetGene', () => {
      var genome = new PairingsGenome();
      genome.genes = [{
        guest: 'Doris',
        driver: 'Bradley'
      }];

      var targetGene = {guest: 'Doris', driver: 'Zeus'};

      genome.eliminateGene(targetGene);
      expect(genome.genes.length).toEqual(0);
    });

    it('eliminates any genes that match the driver component of the targetGene', () => {
      var genome = new PairingsGenome();
      genome.genes = [{
        guest: 'Doris',
        driver: 'Bradley'
      }];

      var targetGene = {guest: 'Jean', driver: 'Bradley'};

      genome.eliminateGene(targetGene);
      expect(genome.genes.length).toEqual(0);
    });

    it('eliminates multuple genes that match across driver or guest', () => {
      var genome = new PairingsGenome();
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
      var genome = new PairingsGenome();
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
      var male = new PairingsGenome();
      male.genes = [{
        guest: 'Doris',
        driver: 'Bradley',
        distance: 40
      }];

      var female = new PairingsGenome();
      male.genes = [{
        guest: 'Doris',
        driver: 'Bradley',
        distance: 40
      }];

      var child = new PairingsGenome();
      child.genes = [{
        guest: 'Doris',
        driver: 'Bradley',
        distance: 40
      }];

      expect(male.mateWith(female)).toEqual(child);
    })
  });
});