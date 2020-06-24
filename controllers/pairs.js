var PairController = { 
  Pairing: (request, response) => {
    // contact MongoDB
    // sort drivers and guests
    var members = {
      drivers: [ {name: 'Bradley'}, {name: 'Zeus'}, {driver: 'Kevin'} ],
      guests: [ {name: 'Doris' }, { name: 'Kimothey' }, {guest: 'Perry'}]
    }


    // randomly pair drivers and guests

    var pairings = [
      {id: 1, driver: 'Bradley', guest: 'Doris'},
      {id: 2, driver: 'Zeus', guest: 'Kimothey' },
      {id: 3, driver: 'Kevin', guest: 'Perry' }
    ]

    response.send({ pairs: pairings});
  }
}

// UTILITY METHODS
PairController.generatePairs = (members) => {
  return [{
    id: 1,
    driver: members.drivers[0].name,
    guest: members.guests[0].name
  }]
}

module.exports = PairController;