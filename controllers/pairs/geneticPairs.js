var GeneticPairs = {};

GeneticPairs.generate = (members) => {
  return [{
    id: 1,
    guest: members[0].name,
    driver: members[0].drivers[0].name,
    distance: members[0].drivers[0].distance,
  }]
}

module.exports = GeneticPairs;
