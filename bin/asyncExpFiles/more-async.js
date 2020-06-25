const googleMapsClient = require('@google/maps').createClient({
  key: 'AIzaSyC9qJYJPqeVBtCCvu68wQ286oyCL8Z5PqQ',
  Promise: Promise
});

var addresses = [{origin: 'SE153XX', destination: 'SW129PH'}, {origin: 'SE153XX', destination: 'SW129PH'}, {origin: 'SE153XX', destination: 'SW129PH'}]

async  function  updateUserInformation(usersArray) {
  console.log('start');
  var userInformationPromises = usersArray.map(function(user) {
    return  userInformationServerRequest(user);
  });
  var updatedUserInformation =  await  Promise.all(userInformationPromises);
  console.log(updatedUserInformation);
  console.log('end');
}

function  userInformationServerRequest(user) {
  return  new  Promise(function(resolve) {
    googleMapsClient.directions({origin:'SE153XX', destination:'SW129PH'})
    .asPromise()
    .then((result) => {
      driverInfo = {
        distance: result.routes[0].legs[0].distance.value
      }
      resolve(driverInfo);
    });
  });
}

updateUserInformation(addresses);