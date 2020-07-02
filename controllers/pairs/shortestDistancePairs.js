var ShortestDistancePairs = {
  generate: (pairDistances) => {
    /*
      1. Compare all guest-driver distances and 'find shortest global pair distance'
      2. Assign that shortest pair to output
      3. Eliminate that guest from input
      4. Elimate that driver as a possibilty for all other guests
      5. Repeat until all pairs are assigned
      6. Return output
    */

    var pairing = [];

    while (pairDistances.length > 0) {
      var shortestPair = { id: 0, distance: 100000000 };
      var guestIndex;
      var driverName;

      pairDistances.forEach((guest, i) => {
        guest.drivers.forEach((driver, j) => {
          if (driver.distance < shortestPair.distance) {
            shortestPair = {
              id: pairing.length + 1,
              driver: driver.name,
              guest: guest.name,
              telephone: guest.telephone,
              distance: driver.distance,
              route: driver.route,
            };
            guestIndex = i;
            driverName = driver.name;
          }
        });
      });
      pairing.push(shortestPair);
      pairDistances.splice(guestIndex, 1);

      pairDistances.forEach((guest) => {
        guest.drivers.forEach((driver, index) => {
          if (driver.name === driverName) {
            guest.drivers.splice(index, 1);
          }
        });
      });
    }
    return pairing;
  },
};

module.exports = ShortestDistancePairs;
