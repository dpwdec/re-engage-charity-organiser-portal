var PairController = { 
  Pairing: (request, response) => {
    response.send(
      {
        pairs: [
          {id: 1, driver: 'Bradley', guest: 'Doris'},
          {id: 2, driver: 'Zeus', guest: 'Kimothey' },
          {id: 3, driver: 'Kevin', guest: 'Perry' }
        ]
      }
    );
  }
}

module.exports = PairController;