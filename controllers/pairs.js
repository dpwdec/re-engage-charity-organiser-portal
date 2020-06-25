var PairController = { 
  Pairing: (request, response) => {
    // contact MongoDB
    // sort drivers and guests
    var members = {
      drivers: [ {name: 'Bradley'}, {name: 'Zeus'}, {name: 'Kevin'} ],
      guests: [ {name: 'Doris' }, { name: 'Kimothey' }, {name: 'Perry'}]
    }
    
    // randomly pair drivers and guests
    var pairings = PairController._generatePairs(members);

    response.send({ pairs: pairings});
  },
  Map: (request, response) => {
    response.render('map')
  },
  Route: (request, response) => {
    const googleMapsClient = require('@google/maps').createClient({
      key: 'AIzaSyC9qJYJPqeVBtCCvu68wQ286oyCL8Z5PqQ',
      Promise: Promise
    });

    googleMapsClient.directions({origin: 'SW129PH', destination: 'SE153XX', mode: 'driving'})
    .asPromise()
    .then((result) => {
      console.log(result);
      response.send(result)
    }); 
  }
}

// UTILITY METHODS

PairController._generatePairsByDistance = (pairDistances) => {
  var pairing = [
    { id: 1, 
      driver: pairDistances[0].drivers[0].name, 
      guest: pairDistances[0].name,
      distance: pairDistances[0].drivers[0].distance 
    }
  ]

  return pairing
  
};

















PairController._generatePairs = (members) => {
  // randomise the order of each members and guests array
  var mixedMembers = PairController._mixMembers(members);

  //pair up drivers and guests from arrays
  var pairs = mixedMembers.drivers.map((driver, index) => {
    return {
      id: index+1,
      driver: driver.name,
      guest: mixedMembers.guests[index].name
    }
  });
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