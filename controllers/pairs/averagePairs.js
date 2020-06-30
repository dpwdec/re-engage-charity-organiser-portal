const _ = require('lodash');
var AveragePairs = {}


AveragePairs.generate = (members) => {
  this.drivers = [];
  this.guests = [];

  members.forEach((guest) => {
    this.guests.push(guest.name);
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
          guest: guest,
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


  // pairings.forEach((pairing) => {
  //   console.log(pairing);
  // })

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

  // console.log(pairings[0]);
  // console.log(pairings[1]);
  // console.log(pairings[2]);

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



  /*
  pairing {
    pairs: [array of pairs]
    averageDistance: number
  }
  */

//  var flip = true;
//   // generate all possible pairings for this data set
//   for(var i = 0; i < 9; i ++) { // number of possible cominations

//     // number of pairs for this set of pairs
//     for(var j = 0; j < 3; j ++) {
//       // the pairs for this combination
//       var pairs = [];


//       this.guests.forEach((guest, index) => {

//         var newPair = {
//           driver: this.drivers[index],
//           guest: guest
//         }
//         pairs.push(newPair);
//       });

//       // shift guests
//       var tempGuest = this.guests.pop();
//       this.guests.unshift(tempGuest);                                                                                                                                                                                                                                                                                                                                                                                                                                                        

//       var pairing =  {
//         pairs: pairs,
//         averageDistance: 10000000
//       }

//       pairings.push(pairing);
//     }

//     //shift the guests back to neutral
//     var tempGuest = this.guests.pop();
//     this.guests.unshift(tempGuest);

//     if(flip) {
//       var tempDriver = this.drivers.pop();
//       this.drivers.unshift(tempDriver);
//     } else {
//       var tempGuest = this.guests.pop();
//       this.guests.unshift(tempGuest);
//     }
//     flip = !flip;
//   }

  // var flip = true;
  // for(var i = 0; i < this.guests.length; i++) {
  //   var pairs = [];
  //   this.guests.forEach((guest, index) => {
  //     var newPair = {
  //       driver: this.drivers[index],
  //       guest: guest
  //     }
  //     pairs.push(newPair);
  //   });

  //   var pairing = {
  //     pairs: pairs,
  //     averageDistance: 10000000
  //   }

  //   pairings.push(pairing);
    // if(flip) {
    //   var tempDriver = this.drivers.pop();
    //   this.drivers.unshift(tempDriver);
    // } else {
    //   var tempGuest = this.guests.pop();
    //   this.guests.unshift(tempGuest);
    // }
    // flip = !flip;
  // };

  /*

  [a, b, c]
  [d, e, f]
  [{a, d}, {b, e}, {c, f}]

  [a, c, b]
  [d, e, f]

  [a, b, c]
  [f, d, e]

  [a, c, b]
  [f, d, e]

  [a, b, c]
  [e, f, d]

  [a, c, b]
  [e, f, d]

  // iterate through the a1 


  */

//  for(var i = 0; i < this.guests.length; i++) {
//   for(var j = 0; j < this.guests.length; j++) {
//     var pairing = {
//       pairs: []
//     }
//     this.guests.forEach((guest, index) => {
//       pairing.pairs.push({
//         guest: guest,
//         driver: this.drivers[index]
//       })
//     });
//     pairings.push(pairing);
//     console.log(this.drivers);
//     var tempDriver = this.drivers.pop();
//     this.drivers.unshift(tempDriver);
//   }

//   // console.log(this.drivers);
//   // var tempDriver = this.drivers.pop();
//   // console.log(tempDriver);
//   // this.drivers.unshift(tempDriver);
//   // console.log('hello', this.drivers);
  
//   var tempGuest = this.guests.pop();
//   this.guests.unshift(tempGuest);
// }