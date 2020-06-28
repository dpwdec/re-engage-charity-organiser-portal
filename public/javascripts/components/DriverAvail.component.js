class DriverAvail extends React.Component {

  constructor() {
    super();
    this.state = {
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
              <th>Name</th> <th>Month 1</th> <th>Month 2</th> <th>Month 3</th> <th>Month 4</th>
            </tr>
          </thead>
          <tbody>
            {this.state.drivers.map((driver) => (
              < Driver name={driver.name} 
                month1={driver.month1} month2={driver.month2}
                month3={driver.month3} month4={driver.month4} 
                id={driver._id} key={driver._id} />
              ))
            }
          </tbody>
        </table>

      </div>
    );

  }

  
}