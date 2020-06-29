class DriverAvailability extends React.Component {

  constructor() {
    super();
    this.state = {
      months: [],
      drivers: []
    };
  };

  componentDidMount() {
    fetch('/availability/driverAvailability')
    .then(response => {
      return response.json()
    }).then((result) => {
      this.setState({
        months: result.months,
        drivers: result.drivers 
      });
    });
  }

  render() {
    return (
      <div>
        <h2> Driver Availabilities </h2>
        <table className="driver-avail">
          <thead>
            <tr>
              <th>Name</th>
              <th>{this.state.months[0]}</th>
              <th>{this.state.months[1]}</th>
              <th>{this.state.months[2]}</th>
              <th>{this.state.months[3]}</th>
            </tr>
          </thead>

          <tbody>
            {this.state.drivers.map((driver) => (
              <AvailabilityRow driver={driver} months={this.state.months} key={driver._id} id={driver._id}/>
              ))
            }
          </tbody>
        </table>
      </div>
    );
  };

}