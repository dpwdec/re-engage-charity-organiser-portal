const googleMapsClient = require('@google/maps').createClient({
  key: 'AIzaSyC9qJYJPqeVBtCCvu68wQ286oyCL8Z5PqQ',
  Promise: Promise
});

async function getDriverGuestDistanceInformation() {
  console.log('start');

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
  console.log(members[1])
  console.log(members[1].drivers);
  console.log('end');
}

function makeGoogleApiRequestForDistance(member, guest, driver) {
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

getDriverGuestDistanceInformation();