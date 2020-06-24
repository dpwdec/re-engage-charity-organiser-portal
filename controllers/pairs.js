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
  // randomise the order of each members and guests array
  // and then just iterate through them and pair them up

  //array.inject(array, function(driver, guest)

  // members.drivers.foreach(driver, i)
  // { id: i, drivers: dirver.name, guest, members.guests[i].name}

  

  return members.drivers.map((driver, index) => {
    return {
      id: index+1,
      driver: driver.name,
      guest: members.guests[index].name
    }
  });
}

module.exports = PairController;