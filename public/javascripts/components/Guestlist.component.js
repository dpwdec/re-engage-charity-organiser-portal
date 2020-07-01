class GuestList extends React.Component {
  render() {

    return(
      <div>
        <h2>List of Guests</h2>
        <table className="guest-list">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {this.props.guests.map((guest) => (
              < Guest name={guest.name} address={guest.address} id={guest._id} key={guest._id} />
              ))
            }
          </tbody>
        </table>
      </div>
    )
  }
}
