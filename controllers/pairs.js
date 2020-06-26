const googleMapsClient = require("@google/maps").createClient({
  key: "AIzaSyC9qJYJPqeVBtCCvu68wQ286oyCL8Z5PqQ",
  Promise: Promise,
});

var PairController = {
  Pairing: async (request, response) => {
    // contact to get members

    var drivers = [{name: 'Bradley', address: 'SE153XX', role: 'driver'}, {name: 'Zeus', address: 'SW64QP', role: 'driver'}]
    var guests = [{name: 'Doris', address: 'SE58HU', role: 'guest'}, {name: 'Tanil', address: 'SW114NJ', role: 'guest'}]

    var allPromises = []
    var members = []

    guests.forEach((guest) => {

      var member = {
        name: guest.name,
        drivers: []
      }

      var driverGuestPairPromises = drivers.map((driver) => {
        return  makeGoogleApiRequestForDistance(member, guest, driver);
      });

      driverGuestPairPromises.forEach((APIpromise) => {
        allPromises.push(APIpromise);
      })

      members.push(member);
    });
  
    var updatedUserInformation =  await Promise.all(allPromises); // waits for all API calls to finish

    // randomly pair drivers and guests
    var pairings = PairController._generatePairsByDistance(members);

    response.send({ pairs: pairings });
  },
  Map: (request, response) => {
    response.render("map");
  },
  Route: (request, response) => {
    googleMapsClient
      .directions({
        origin: "SW129PH",
        destination: "SE153XX",
        mode: "driving",
      })
      .asPromise()
      .then((result) => {
        console.log(result);
        response.send(result);
      });
  },
};

makeGoogleApiRequestForDistance = (member, guest, driver) => {
  return new Promise(function(resolve) {
    googleMapsClient.directions({origin: guest.address, destination: driver.address})
    .asPromise()
    .then((result) => {
      //add the driver to the guest object
      member.drivers.push({
        name: driver.name,
        distance: result.json.routes[0].legs[0].distance.value
      })
      resolve(result);
    });
  });
}

// UTILITY METHODS

PairController._generatePairsByDistance = (pairDistances) => {
  // compare all distances 'find shorted global pair distance'
  // assign pair to output
  // eliminate that driver from all other guests
  // repeat until one pair left
  // return output

  // while loop, until guests array < 1

  var pairing = [];

  while (pairDistances.length > 0) {
    var shortestPair = { id: 0, distance: 100000000 };
    var guestIndex;
    var driverIndex;

    pairDistances.forEach((guest, i) => {
      guest.drivers.forEach((driver, j) => {
        if (driver.distance < shortestPair.distance) {
          shortestPair = {
            id: pairing.length + 1,
            driver: driver.name,
            guest: guest.name,
            distance: driver.distance,
          };
          guestIndex = i;
          driverIndex = j;
        }
      });
    });
    pairing.push(shortestPair);
    pairDistances.splice(guestIndex, 1);

    pairDistances.forEach((guest) => {
      guest.drivers.splice(driverIndex, 1);
    });
  }

  // var lastPair = {
  //   id: pairing.length + 1,
  //   driver: pairDistances[0].drivers[0].name,
  //   guest: pairDistances[0].name,
  //   distance: pairDistances[0].drivers[0].distance,
  // };

  // pairing.push(lastPair);
  console.log(pairing);
  return pairing;
};

module.exports = PairController;
