const _ = require('lodash');
var AveragePairs = {}


AveragePairs.generate = (members) => {
  this.drivers = [];
  this.guests = [];

  members.forEach((guest) => {
    this.guests.push(guest);
  });

  members[0].drivers.forEach((driver) => {
    this.drivers.push(driver.name);
  });

  var pairings = [];
 /*
  pairing {
    pairs: [array of pairs]
    averageDistance: number
  }
  */

  for(var i = 0; i < this.guests.length; i++) {
    // set up pairing object
    // clone guests for mutation
    guestClone = _.clone(this.guests);

    for(var j = 0; j < this.guests.length-1; j++) {
      var pairing = {
        pairs: []
      };

      // pair up each guest with driver
      guestClone.forEach((guest, index) => {
        var pair = {
          guest: guest.name,
          telephone: guest.telephone,
          driver: this.drivers[index]
        }
        pairing.pairs.push(pair);
      });

      // add to global pairing array
      pairings.push(pairing);
      // swap around elements of the array each time
      var tempGuest = guestClone.shift();
      var swapGuest = guestClone.pop();
      guestClone.unshift(swapGuest);
      guestClone.unshift(tempGuest);
    }

    var tempDriver = this.drivers.pop();
    this.drivers.unshift(tempDriver);

  }

  //look up distance info
  pairings.forEach((pairing) => {
    pairing.pairs.forEach((pair) => {
      members.forEach((guest) => {
        if(pair.guest === guest.name) {
          guest.drivers.forEach((driver) => {
            if(pair.driver === driver.name) {
              pair.distance = driver.distance;
              pair.route = driver.route;
              return;
            }
          });
        }
      });
    });
  });

  //calculate average distance
  pairings.forEach((pairing) => { 
    var cumulativeDistance = 0;
    pairing.pairs.forEach((pair) => {
      cumulativeDistance += pair.distance;
    });
    pairing.averageDistance = cumulativeDistance/pairing.pairs.length;
  });

  //find pairing with lowest average distance
  var bestPairing = {
    pairs: [],
    averageDistance: 1000000000 //big number
  }
  pairings.forEach((pairing) => {
    if(pairing.averageDistance < bestPairing.averageDistance) {
      bestPairing = pairing;
    }
  });

  //add ids
  bestPairing.pairs.forEach((pair, index) => {
    pair.id = index+1;
  })
  return bestPairing.pairs;
  
}

module.exports = AveragePairs;