class GuestList extends React.Component {

  constructor() {
    super();
    this.state = {
      guests: [],
    };
  };

  componentDidMount() {
    this.fetchGuests('/guests');
  }

  fetchGuests = () => {
    fetch('guests')
    .then(response => response.json())
    .then((data) => {
      this.setState({
        guests: data,
      });
    });
  }

  sortGuestsAtoZ() {
    return this.state.guests.sort(function(memberA, memberB) {
      var memberA = memberA.name.toUpperCase();
      var memberB = memberB.name.toUpperCase();
      return (memberA < memberB) ? -1 : (memberA > memberB) ? 1 : 0;
    });
  }

  render() {

    return(
      <div>
        <h2>List of Guests</h2>
        <table>
            <tr>
              <th>Name</th>
              <th>Address</th>
            </tr>
            {this.sortGuestsAtoZ().map((guest) => {
              return(
                <tr class="guest-list">
                  <td>{guest.name}</td>
                  <td>{guest.address}</td>
                </tr>
              )
            })}
        </table>
      </div>
    )
  }
}
