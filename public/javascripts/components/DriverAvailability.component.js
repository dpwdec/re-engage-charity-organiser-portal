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
      console.log(result);
      this.setState({
        months: result.months,
        drivers: result.drivers 
      });
      // var month1 = this.state.months[1];
      // console.log(month1);
      // var CatMonth1 = this.state.drivers[0].availability[month1];
      // console.log(CatMonth1);
    });
  }

  render() {



    // if month is undefined, return 'unconfirmed' 
    // else return value -> t/f


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
              <tr>
                <td> {driver.name} </td>
                { driver.availability ? <td> {driver.availability[this.state.months[0]]} </td> : <td> unconfirmed </td> }
                { driver.availability ? <td> {driver.availability[this.state.months[1]]} </td> : <td> unconfirmed </td> }
                { driver.availability ? <td> {driver.availability[this.state.months[2]]} </td> : <td> unconfirmed </td> }
                { driver.availability ? <td> {driver.availability[this.state.months[3]]} </td> : <td> unconfirmed </td> }
              </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    );
  };

}