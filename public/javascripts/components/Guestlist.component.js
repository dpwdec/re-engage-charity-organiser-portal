class GuestList extends React.Component {

  // constructor() {
  //   super();
  //   this.state = {
  //     guests: [],
  //   };
  // };

  // componentDidMount() {
  //   this.fetchGuests('/guests');
  // }

  // fetchGuests = () => {
  //   fetch('/guests')
  //   .then(response => response.json())
  //   .then((data) => {
  //     this.setState({
  //       guests: data,
  //     });
  //     this.setState({
  //       guests: this.sortGuestsAtoZ(),
  //     });
  //   });
  // }

  // sortGuestsAtoZ() {
  //   return this.state.guests.sort(function(memberA, memberB) {
  //     var memberA = memberA.name.toUpperCase();
  //     var memberB = memberB.name.toUpperCase();
  //       return (memberA < memberB) ? -1 : (memberA > memberB) ? 1 : 0;
  //   });
  // }

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
