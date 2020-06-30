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
    this.setState({
      pairs: [],
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
          <option value="Jan 2020">January</option>
          <option value="Feb 2020">February</option>
          <option value="Mar 2020">March</option>
          <option value="Apr 2020">April</option>
          <option value="May 2020">May</option>
          <option value="Jun 2020">June</option>
          <option value="Jul2020">July</option>
          <option value="Aug 2020">August</option>
          <option value="Sept 2020">September</option>
          <option value="Oct 2020">October</option>
          <option value="Nov 2020">November</option>
          <option value="Dec 2020">December</option>
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
