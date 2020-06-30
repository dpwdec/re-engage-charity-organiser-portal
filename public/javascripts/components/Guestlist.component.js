class GuestList extends React.Component {
  render() {
    return (
      <div>
        <h2>List of Guests</h2>
        <div className="guest-list col-5">
          <div className="headers row">
            <div className="name">Name</div>
            <div className="name">Address</div>
          </div>
          {this.props.guests.map((guest, index) => (
            <Guest
              name={guest.name}
              address={guest.address}
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
