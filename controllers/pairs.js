var mongoose = require("mongoose");
const Member = require("../models/member");
const ShortestDistancePairs = require("./pairs/shortestDistancePairs");

const googleMapsClient = require("@google/maps").createClient({
  key: "AIzaSyC9qJYJPqeVBtCCvu68wQ286oyCL8Z5PqQ",
  Promise: Promise,
});

var PairController = {
  Pairing: async (request, response) => {
    Member.find({ role: "guest" }, (err, guests) => {
      Member.find({ role: "driver" }, async (err, drivers) => {
        var members = [];
        var allPromises = [];

        guests.forEach((guest) => {
          var member = {
            name: guest.name,
            drivers: [],
          };

          var driverGuestPairPromises = drivers.map((driver) => {
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
