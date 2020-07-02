class Pairing extends React.Component {
  constructor() {
    super();
    this.state = {
      pairs: [],
      month: "",
      pairingType: "shortest",
    };
  }

  generatePairs = () => {
    fetch(
      `/pairs?month=${this.state.month}&pairingType=${this.state.pairingType}`
    )
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
    var today = new Date();
    var yyyy = today.getFullYear();

    this.setState({
      month: e.target.value + yyyy,
    });
    this.setState({
      pairs: [],
    });
  };

  setPairingType = (event) => {
    var eventOutput = event.target.value;
    this.setState({
      pairingType: event.target.value,
    });
    this.setState({
      pairs: [],
    });
  };

  render() {
    return (
      <div className="pairs">
          <div className="col-5">
          <button id="generate-pairs" className="login100-form-btn-small" onClick={this.generatePairs}>
            Generate
          </button>
          <select id="month" onChange={this.handleChangeMonth}>
            <option>please select month</option>
            <option value="Jan ">January</option>
            <option value="Feb ">February</option>
            <option value="Mar ">March</option>
            <option value="Apr ">April</option>
            <option value="May ">May</option>
            <option value="Jun ">June</option>
            <option value="Jul ">July</option>
            <option value="Aug ">August</option>
            <option value="Sept ">September</option>
            <option value="Oct ">October</option>
            <option value="Nov ">November</option>
            <option value="Dec ">December</option>
          </select>
          <select name="pairingType" onChange={this.setPairingType}>
            <option value="shortest">Shortest</option>
            <option value="average">Average</option>
            <option value="smart">Smart</option>
          </select>
          <div className="table">
            <table>
              <thead>
                <td>No.</td>
                <td>Driver</td>
                <td>Guest</td>
                <td>Guest Telephone</td>
                <td>Distance</td>
                <td>R.Colour</td>
              </thead>
              <tbody>
                {this.state.pairs.map((pair) => (
                  <PairItem
                    driver={pair.driver}
                    guest={pair.guest}
                    telephone={pair.telephone}
                    distance={pair.distance}
                    id={pair.id}
                    key={pair.id}
                  />
                ))}
              </tbody>
            </table>
            <div className="pairing-table">
              <PairingsMap pairs={this.state.pairs} />
            </div>
          
          </div>
        </div>
      </div>
    );
  }
}
