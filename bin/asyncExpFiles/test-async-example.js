const googleMapsClient = require('@google/maps').createClient({
  key: 'AIzaSyC9qJYJPqeVBtCCvu68wQ286oyCL8Z5PqQ',
  Promise: Promise
});

var drivers = [{name: 'Bradley', address: 'SE153XX', role: 'driver'}]
var guests = [{name: 'Doris', address: 'SE58HU', role: 'guest'}]

var members = []

guests.map((guest) => {
  var member = {
    name: guest.name,
    drivers: []
  }
  drivers.map((driver) => {
    googleMapsClient.directions({origin: guest.address, destination: driver.address, mode: 'driving'}) // distance, time
    .asPromise()
    .then((result) => {
      member.drivers.push({
        name: driver.name,
        distance: result.distance
      })
    })
  })
  members.push(member);
})

console.log(members[0].drivers);

//wait until all calls to google have finished before sending
//res.send(members);