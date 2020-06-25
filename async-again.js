const googleMapsClient = require('@google/maps').createClient({
  key: 'AIzaSyC9qJYJPqeVBtCCvu68wQ286oyCL8Z5PqQ',
  Promise: Promise
});

var persons = [{name: 'Dec', origin: 'SE153XX'}, 
{name: 'Jo', origin: 'SW129PH'}, 
{name: 'Gerry', origin: 'SE58HU'}];
var addresses = [{origin: 'SE153XX', destination: 'SW178LA'}, {origin: 'SE153XX', destination: 'SE229EX'}, {origin: 'SE153XX', destination: 'SW99PA'}]


async function updateUserInformation(usersArray) {
  console.log('start');
  var allPromises = []
  persons.forEach((person) => {
    var userInformationPromises = usersArray.map(function(user) {
      return  userInformationServerRequest(user, person);
    });
    userInformationPromises.forEach((APIpromise) => {
      allPromises.push(APIpromise);
    })
  });
  
  var updatedUserInformation =  await  Promise.all(allPromises);
  console.log(updatedUserInformation);
  console.log('end');
}

function userInformationServerRequest(user, person) {
  return new Promise(function(resolve) {
    googleMapsClient.directions({origin: user.destination, destination:person.origin})
    .asPromise()
    .then((result) => {
      var driverInfo = {
        distance: result.json.routes[0].legs[0].distance.value
      }
      resolve(driverInfo);
    });
  });
}

updateUserInformation(addresses);