const googleMapsClient = require('@google/maps').createClient({
  key: 'AIzaSyC9qJYJPqeVBtCCvu68wQ286oyCL8Z5PqQ',
  Promise: Promise
});

var PairController = { 
  Pairing: (request, response) => {
    // contact to get members
    // drivers = members.find(drivers)
    // guests = members.find(guests)

    //sort members into drivers and guest

    //contact google maps API and get all driver and guest routes
    //sort API return into members format
    //for each guest make a directions API request for each driver

    // var members = [];
    // var guests = [{name: 'Doris', Address: 'SE153XX', role: 'guest'}]
    // var drivers = [{name: 'Zeus', Address: 'SW129PH', role: 'driver'}]

    // //async
    // guests.forEach((guest) => {
    //   guestData = {
    //     name: guest.name,
    //     drivers: []
    //   }

    //   drivers.forEach((driver) => {
    //     googleMapsClient.directions({origin: guest.Address, destination: driver.Address, mode: 'driving'})
    //     .asPromise()
    //     .then((result => {
    //       driverData = {
    //         name: driver.name,
    //         distance: result.routes[0].legs[0].distance.value
    //       }
    //       guestData.drivers.push(driverData);
    //      })
    //     );
    //   });

    //   members.push(guestData);
    // });
    // //async


    // var pairings = PairController._generatePairsByDistance(members);

    // members = []

    // guests, drivers.
    // guests.forEach((guest) => {
    //   guestObject;
    //   drivers.forEach((driver) => {
    //     makeApiRequest{
    //       origin = guest
    //       destion = driver
    //     }.then{
    //       result
    //       guestObject.drivers.push({

    //       })
    //     }

    //   })
    // })

    // sort drivers and guests
    var members = [ 
      { name: 'Doris', 
        drivers: [ 
          { 
            name: 'Bradley', 
            distance: 8000 
          },
          { 
            name: 'Zeus', 
            distance: 2000 
          },
          {
            name: 'Kevin',
            distance: 3000
          },
          {
            name: 'Gwen',
            distance: 10000
          }
        ]
      },
      { name: 'Kimothey', 
        drivers: [ 
          { 
            name: 'Bradley', 
            distance: 6000 
          },
          { 
            name: 'Zeus', 
            distance: 3000 
          },
          {
            name: 'Kevin',
            distance: 500
          },
          {
            name: 'Gwen',
            distance: 5000
          }
        ]
      },
      { name: 'Perry', 
        drivers: [ 
          { 
            name: 'Bradley', 
            distance: 300 
          },
          { 
            name: 'Zeus', 
            distance: 10000 
          },
          {
            name: 'Kevin',
            distance: 600
          },
          {
            name: 'Gwen',
            distance: 100
          }
        ]
      },
      { name: 'Petunia', 
        drivers: [ 
          { 
            name: 'Bradley', 
            distance: 300 
          },
          { 
            name: 'Zeus', 
            distance: 400 
          },
          {
            name: 'Kevin',
            distance: 6000
          },
          {
            name: 'Gwen',
            distance: 5000
          }
        ]
      }
    ]
    
    // randomly pair drivers and guests
    var pairings = PairController._generatePairsByDistance(members);

    response.send({ pairs: pairings});
  },
  Map: (request, response) => {
    response.render('map')
  },
  Route: (request, response) => {
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

  // compare all distances 'find shorted global pair distance' 
  // assign pair to output 
  // eliminate that driver from all other guests 
  // repeat until one pair left
  // return output 


  // while loop, until guests array < 1 

  var pairing = []

  while(pairDistances.length > 1) {
    var shortestPair = {id: 0, distance: 100000000}
    var guestIndex; 
    var driverIndex;

    pairDistances.forEach((guest, i) => {
    
      guest.drivers.forEach((driver, j) => {
        if (driver.distance < shortestPair.distance) {
          shortestPair = { id: pairing.length + 1, 
            driver: driver.name, 
            guest: guest.name,
            distance: driver.distance 
          }
          guestIndex = i;
          driverIndex = j;
        }
      });
    })
    pairing.push(shortestPair)
    pairDistances.splice(guestIndex, 1)

    pairDistances.forEach((guest) => {
      guest.drivers.splice(driverIndex, 1)
    })
  }

  var lastPair = {
    id: pairing.length + 1,
    driver: pairDistances[0].drivers[0].name,
    guest: pairDistances[0].name,
    distance: pairDistances[0].drivers[0].distance
  }
  
  pairing.push(lastPair)
  console.log(pairing)
  return pairing
};

module.exports = PairController;