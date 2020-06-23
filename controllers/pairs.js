var PairController = { 
  Pairing: (request, response) => {
    response.send({someData: 'hello'});
  }
}

module.exports = PairController;