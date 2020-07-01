class DriverList extends React.Component {

  render() {
    return(
      <div>
        <h2>List of Drivers</h2>
        <table className="driver-list">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {this.props.drivers.map((driver) => (
              < Driver name={driver.name} address={driver.address} id={driver._id} key={driver._id} />
              ))
            }
          </tbody>
        </table>
      </div>
    )
  }
}
