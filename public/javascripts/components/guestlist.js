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

  render() {
    let data = this.state.guests;

    return(
      <div>
        <h2>List of Guests</h2>
        <table>
            <tr>
              <th>Name</th>
              <th>Address</th>
            </tr>
            {data.map((guest) => {
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
