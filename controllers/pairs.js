var PairController = { 
  Pairing: (request, response) => {
    // contact MongoDB
    // sort drivers and guests
    var members = {
      drivers: [ {name: 'Bradley'}, {name: 'Zeus'}, {name: 'Kevin'} ],
      guests: [ {name: 'Doris' }, { name: 'Kimothey' }, {name: 'Perry'}]
    }
    // randomly pair drivers and guests
    var pairings = PairController.generatePairs(members);
    
    response.send({ pairs: pairings});
  }
}

// UTILITY METHODS
PairController.generatePairs = (members) => {
  // randomise the order of each members and guests array
  var mixedMembers = PairController._mixMembers(members);
  // and then just iterate through them and pair them up

  var pairs = mixedMembers.drivers.map((driver, index) => {
    return {
      id: index+1,
      driver: driver.name,
      guest: mixedMembers.guests[index].name
    }
  });

  console.log(pairs)
  return pairs
}

PairController._mixMembers = (members) => {
  members.drivers = PairController._shuffleArray(members.drivers);
  members.guests = PairController._shuffleArray(members.guests);
  return members;
}

PairController._shuffleArray = (array) => {
  for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
  return array;
}

module.exports = PairController;