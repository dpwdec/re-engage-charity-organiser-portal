class Pairing extends React.Component {
  constructor() {
    super();
    this.state = {
      pairs: [],
    };
  }

  generatePairs = () => {
    fetch(`/pairs`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          pairs: data.pairs,
        });
      });
  };

  render() {
    console.log(this.state.pairs);
    return (
      <div>
        <button id="generate-pairs" onClick={this.generatePairs}>
          Generate
        </button>
        <div className="table">
          <table>
            <thead></thead>
            <tbody>
              {this.state.pairs.map((pair) => (
                <PairItem
                  driver={pair.driver}
                  guest={pair.guest}
                  distance={pair.distance}
                  id={pair.id}
                  key={pair.id}
                />
              ))}
            </tbody>
          </table>
          <PairingsMap pairs={this.state.pairs} />
        </div>
      </div>
    );
  }
}
