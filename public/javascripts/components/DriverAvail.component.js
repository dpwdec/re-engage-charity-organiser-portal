class DriverAvail extends React.Component {

  constructor() {
    super();
    this.state = {
      months: [],
      drivers: [],
    };
  };

  componentDidMount() {
    fetch('/driverAvail')
    .then(response => {
      return response.json()
    }).then((data) => {
      this.setState({
        drivers: data
      })
    })
  }

  render() {

    return(
      <div>
        <h2> Driver Availabilities </h2>
        <table className="driver-avail">
          <thead>
            <tr>
              <th></th>
              <th>Name</th> 
              <th>{this.state.months[0]}</th>
              <th>{this.state.months[1]}</th>
              <th>{this.state.months[2]}</th>
              <th>{this.state.months[3]}</th>
            </tr>
          </thead>
          <tbody>
            {this.state.drivers.map((driver) => (
              <Driver name={driver.name} 
                month1={driver.month1} 
                month2={driver.month2}
                month3={driver.month3} 
                month4={driver.month4} 
                id={driver._id} 
                key={driver._id} />
              ))
            }
          </tbody>
        </table>

      </div>
    );

  }

  
}