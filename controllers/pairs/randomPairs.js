var RandomPairs = {
  generate: (members) => {
    // randomise the order of each members and guests array
    var mixedMembers = RandomPairs._mixMembers(members);
  
    //pair up drivers and guests from arrays
    var pairs = mixedMembers.drivers.map((driver, index) => {
      return {
        id: index+1,
        driver: driver.name,
        guest: mixedMembers.guests[index].name
      }
    });
    return pairs
  },

  _mixMembers: (members) => {
    members.drivers = RandomPairs._shuffleArray(members.drivers);
    members.guests = RandomPairs._shuffleArray(members.guests);
    return members;
  },

  _shuffleArray: (array) => {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
  }
}

module.exports = RandomPairs;