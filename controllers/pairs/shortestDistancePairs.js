var ShortestDistancePairs = {
  generate: (pairDistances) => {
    // compare all distances 'find shorted global pair distance'
    // assign pair to output
    // eliminate that driver from all other guests
    // repeat until one pair left
    // return output
  
    // while loop, until guests array < 1
  
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
              distance: driver.distance,
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
          if(driver.name === driverName) {
            guest.drivers.splice(index, 1);
          }
        });
      });
    }
    return pairing;
  }
}

module.exports = ShortestDistancePairs;