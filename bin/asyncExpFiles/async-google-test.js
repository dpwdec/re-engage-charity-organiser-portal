const googleMapsClient = require('@google/maps').createClient({
  key: 'AIzaSyC9qJYJPqeVBtCCvu68wQ286oyCL8Z5PqQ',
  Promise: Promise
});

var addresses = [{origin: 'SE153XX', destination: 'SW129PH'}, {origin: 'SE153XX', destination: 'SW129PH'}, {origin: 'SE153XX', destination: 'SW129PH'}]
var routes =[]

function makeGoogleRequest(address) {
  return new Promise((resolve) => {
    googleMapsClient.directions({origin: address.origin, destination: address.destination})
    .asPromise()
    .then((result) => {
      console.log(result);
      resolve(result);
    })
  });
}

async function getDirections(addressList) {
  addressList.map((address) => {
    console.log('hello')
    return makeGoogleRequest(address);
  });
  console.log(addressList);
  var newDirections = await Promise.all(addressList);
  console.log(newDirections);
};

console.log('start');

getDirections(addresses);

console.log('end');