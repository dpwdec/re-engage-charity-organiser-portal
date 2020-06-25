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
    });
  }

  render() {

    let data = this.state.drivers;

    return(
      <div>
        <h2>List of Drivers</h2>
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
      </div>
    )
  }
}




        //   <section className="table">
        //   { <table>
        //       { data.map((driver) => (
        //         <Driver driverName={driver.name} driverAddress={driver.address} id={driver.id} />
        //           ))
        //       }
        //     </table>
        //   }
        // </section>
