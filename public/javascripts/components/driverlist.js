class DriverList extends React.Component {

  constructor() {
    super();
    this.state = {
      drivers: [],
    };
  };

  componentDidMount() {
    fetchDrivers = () => {
      fetch('/drivers')
      .then(response => response.json())
      .then((data) => {
        this.setState({
          drivers: data,
        });
      });
    }
  }

  // updateState = () => {
  //   this.fetchData('/drivers') // this argument is passed in above, returns HomepageController.DriverList
  // }

  render() {

    let data = this.state.drivers;

    return(
      <div>
        <h3>Drivers List</h3>
        <section>
          <table>
            <tr>
              <th>Name</th>
              <th>Address</th>
            </tr>

            {data.map((driver) => {
              return(
                <tr class="driver-list">
                  <td>{driver.name}</td>
                  <td>{driver.address}</td>
                </tr>
              )
            })}
          </table>
        </section>
      </div>
    )
  }
}
