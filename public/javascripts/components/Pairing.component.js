class Pairing extends React.Component {

  constructor() {
    super();
    this.state = {
      pairs: []
    }
  }

  generatePairs = () => {
    fetch(`/pairs`)
    .then(response => response.json())
    .then((data) => {
      console.log(data)
      this.setState({
        pairs: data.pairs
      });
    })
  }

  render() {
    return (
      <div>
        <button id="generate-pairs" onClick={this.generatePairs}>Generate</button>
        <div className="table">
          { this.state.pairs.map((pair)=> (
            <PairItem driver={pair.driver} guest={pair.guest} key={pair.id} />
            ))
          }
        </div>
      </div>
      

    );
  }
}