var PairController = { 
  Pairing: (request, response) => {
    var pairings = [
      {id: 1, driver: 'Bradley', guest: 'Doris'},
      {id: 2, driver: 'Zeus', guest: 'Kimothey' },
      {id: 3, driver: 'Kevin', guest: 'Perry' }
    ]

    response.send({ pairs: pairings});
  }
}

module.exports = PairController;