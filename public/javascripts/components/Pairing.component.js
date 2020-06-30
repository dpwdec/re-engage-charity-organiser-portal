class Pairing extends React.Component {
  constructor() {
    super();
    this.state = {
      pairs: [],
      pairingType: 'shortest'
    };
  }

  generatePairs = (event) => {
    event.preventDefault();
    fetch(`/pairs?pairingType=${this.state.pairingType}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          pairs: data.pairs,
        });
      });
  };

  setPairingType = (event) => {
    var eventOutput = event.target.value;
    this.setState({
      pairingType: event.target.value
    });
  }

  render() {
    return (
      <div>
        <form action="" onSubmit={this.generatePairs}>
        <select name="pairingType" onChange={this.setPairingType}>
            <option value="shortest">Shortest</option>
            <option value="average">Average</option>
            <option value="smart">Smart</option>
          </select>
          <input type="submit" value="Generate"></input>
        </form>
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
