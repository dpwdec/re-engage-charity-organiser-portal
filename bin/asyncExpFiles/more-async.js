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

var members = [
  {
    name: "Doris",
    drivers: [
      {
        name: "Bradley",
        distance: 8000,
      },
      {
        name: "Zeus",
        distance: 2000,
      },
      {
        name: "Kevin",
        distance: 3000,
      },
      {
        name: "Gwen",
        distance: 10000,
      },
    ],
  },
  {
    name: "Kimothey",
    drivers: [
      {
        name: "Bradley",
        distance: 6000,
      },
      {
        name: "Zeus",
        distance: 3000,
      },
      {
        name: "Kevin",
        distance: 500,
      },
      {
        name: "Gwen",
        distance: 5000,
      },
    ],
  },
  {
    name: "Perry",
    drivers: [
      {
        name: "Bradley",
        distance: 300,
      },
      {
        name: "Zeus",
        distance: 10000,
      },
      {
        name: "Kevin",
        distance: 600,
      },
      {
        name: "Gwen",
        distance: 100,
      },
    ],
  },
  {
    name: "Petunia",
    drivers: [
      {
        name: "Bradley",
        distance: 300,
      },
      {
        name: "Zeus",
        distance: 400,
      },
      {
        name: "Kevin",
        distance: 6000,
      },
      {
        name: "Gwen",
        distance: 5000,
      },
    ],
  },
];