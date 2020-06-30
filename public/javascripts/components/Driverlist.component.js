class DriverList extends React.Component {

  render() {
    return(
      <div>
        <h2>List of Drivers</h2>
        <div className="driver-list col-5">
          <div className="headers row">
              <div className="name">Name</div>
              <div className="address">Address</div>
          </div>
            {this.props.drivers.map((driver, index) => (
              
              < Driver 
                name={driver.name} 
                address={driver.address} 
                index={index} 
                id={driver._id} 
                key={driver._id} 
                deleteMember={this.props.deleteMember}
              />
              ))
            
            }
        </div>
      </div>
    )
  }
}
