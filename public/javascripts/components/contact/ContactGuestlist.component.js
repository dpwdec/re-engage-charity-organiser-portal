class GuestList extends React.Component {
  render() {
    return (
      <div className="guest-list-table shadow-sm p-3 mb-5 bg-white rounded">
        <h2>List of Guests</h2>
        <div className="guest-list col-8">
          <div className="headers row">
            <div className="number col-3">Number</div>
            <div className="name col-3">Name</div>
            <div className="address col-3">Address</div>
            <div className="telephone col-3">Telephone</div>
          </div>
          {this.props.guests.map((guest, index) => (
            <Guest
              name={guest.name}
              address={guest.address}
              telephone={guest.telephone}
              index={index}
              id={guest._id}
              key={guest._id}
              deleteMember={this.props.deleteMember}
            />
          ))}
        </div>
      </div>
    );
  }
}
