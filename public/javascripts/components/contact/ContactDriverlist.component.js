class DriverList extends React.Component {
  render() {
    return (
      <div className="driver-list-table shadow-sm p-3 mb-5 bg-white rounded">
        <h2>List of Drivers</h2>
        <div className="driver-list col-8">
          <div className="headers row">
            <div className="number col-3">Number</div>
            <div className="name col-3">Name</div>
            <div className="address col-3">Address</div>
            <div className="telephone col-3">Telephone</div>
          </div>
          {this.props.drivers.map((driver, index) => (
            <Driver
              className="driver-list-row"
              name={driver.name}
              address={driver.address}
              telephone={driver.telephone}
              index={index}
              id={driver._id}
              key={driver._id}
              deleteMember={this.props.deleteMember}
            />
          ))}
        </div>
      </div>
    );
  }
}
