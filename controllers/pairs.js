var mongoose = require("mongoose");
const Member = require("../models/member");
const ShortestDistancePairs = require("./pairs/shortestDistancePairs");

const googleMapsClient = require("@google/maps").createClient({
  key: process.env.REACT_APP_MAP_API_KEY,
  Promise: Promise,
});

var PairController = {
  Pairing: async (request, response) => {
    console.log("month");
    console.log(request.query.month);
    let month = request.query.month;
    let query = {};
    query[month] = true;

    console.log("query");
    console.log(query);
    Member.find((err, members) => {
      console.log(members.availability);
    });

    Member.find({ role: "guest" }, (err, guests) => {
      var availableGuests = [];
      guests.forEach((guest) => {
        if (guest.availability[month] !== undefined) {
          if (guest.availability[month] === true) {
            availableGuests.push(guest);
          }
        }
      });
      Member.find({ role: "driver" }, async (err, drivers) => {
        var availableDrivers = [];
        drivers.forEach((driver) => {
          if (driver.availability[month] !== undefined) {
            if (driver.availability[month] === true) {
              availableDrivers.push(driver);
            }
          }
        });

        var members = [];
        var allPromises = [];

        availableGuests.forEach((guest) => {
          var member = {
            name: guest.name,
            drivers: [],
          };

          var driverGuestPairPromises = availableDrivers.map((driver) => {
            return makeGooglePairRouteApiRequest(member, guest, driver);
          });

          driverGuestPairPromises.forEach((APIpromise) => {
            allPromises.push(APIpromise);
          });

          members.push(member);
        });

        await Promise.all(allPromises); // waits for all API calls to finish
        var pairings = ShortestDistancePairs.generate(members);

        response.send({ pairs: pairings });
      });
    });
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

makeGooglePairRouteApiRequest = (member, guest, driver) => {
  return new Promise(function (resolve) {
    googleMapsClient
      .directions({ origin: guest.address, destination: driver.address })
      .asPromise()
      .then((result) => {
        //add the driver to the guest object
        member.drivers.push({
          name: driver.name,
          distance: result.json.routes[0].legs[0].distance.value,
          route: result.json,
        });
        resolve(result);
      });
  });
};

module.exports = PairController;
