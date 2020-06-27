class DriverList extends React.Component {

  constructor() {
    super();
    this.state = {
      drivers: [],
    };
  };

  componentDidMount() {
    this.fetchDrivers('/drivers');
  }

  fetchDrivers = () => {
    fetch('/drivers')
    .then(response => response.json())
    .then((data) => {
      this.setState({
        drivers: data,
      });
      this.setState({
        drivers: this.sortDriversAtoZ(),
      });
      
    });
  }

  sortDriversAtoZ = () => {
    return this.state.drivers.sort(function(memberA, memberB) {
    var memberA = memberA.name.toUpperCase();
    var memberB = memberB.name.toUpperCase();
      return (memberA < memberB) ? -1 : (memberA > memberB) ? 1 : 0;
    });
  }

  render() {
    return(
      <div>
        <h2>List of Drivers</h2>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {this.state.drivers.map((driver) => (
              < Driver name={driver.name} address={driver.address} id={driver._id} key={driver._id} />
              ))
            }
          </tbody>
        </table>
      </div>
    )
  }
}
