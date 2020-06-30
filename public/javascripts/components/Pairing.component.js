class Pairing extends React.Component {
  constructor() {
    super();
    this.state = {
      pairs: [],
      month: "",
    };
  }

  generatePairs = () => {
    fetch(`/pairs?month=${this.state.month}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          pairs: data.pairs,
        });
      });
  };
  handleChangeMonth = (e) => {
    //console.log(e.target.value);
    this.setState({
      month: e.target.value,
    });
    console.log("hey");
    console.log(this.state.month);
  };

  render() {
    console.log("pairs");
    console.log(this.state.pairs);
    return (
      <div>
        <button id="generate-pairs" onClick={this.generatePairs}>
          Generate
        </button>
        <select id="month" onChange={this.handleChangeMonth}>
          <option>please select month</option>
          <option value="1">January</option>
          <option value="2">February</option>
          <option value="3">March</option>
          <option value="4">April</option>
          <option value="5">May</option>
          <option value="6">June</option>
          <option value="Jul 2020">July</option>
          <option value="8">August</option>
          <option value="9">September</option>
          <option value="10">October</option>
          <option value="11">November</option>
          <option value="12">December</option>
        </select>
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
