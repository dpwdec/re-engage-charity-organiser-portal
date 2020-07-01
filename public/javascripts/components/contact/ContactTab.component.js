class Contact extends React.Component {
  constructor() {
    super();
    this.state = {
      message: "test message: success/fail add member",
      drivers: [],
      guests: [],
      member: {},
    };
  }

  componentDidMount() {
    this.fetchDrivers("/drivers");
    this.fetchGuests("/guests");
  }

  fetchDrivers = () => {
    fetch("/drivers")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          drivers: data,
        });
        this.setState({
          drivers: this.sortDriversAtoZ(),
        });
      });
  };

  fetchGuests = () => {
    fetch("/guests")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          guests: data,
        });
        this.setState({
          guests: this.sortGuestsAtoZ(),
        });
      });
  };

  mySubmitHandler = (event) => {
    event.target.reset();
    event.preventDefault();
    let newMember = {
      name: this.state.name,
      role: this.state.role,
      address: this.state.address,
    };

    fetch("/createMember", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newMember),
    })
    .then((response) => response.json())
    .then(() => {
      this.setState({
        message: "Success!",
      });
    })
  
    this.fetchGuests();
    this.fetchDrivers();
  };

  deleteMember = (event) => {
    event.preventDefault();
    var member = {
      id: event.target.dataset.id
    };
    
    fetch("/deleteMember", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(member),
    })
    .then((response) => response.json())
    .then((result) => {
      this.setState({
        message: "Success!",
      });
    });

    this.fetchGuests()
    this.fetchDrivers()
  }

  sortGuestsAtoZ() {
    return this.state.guests.sort(function (memberA, memberB) {
      var memberA = memberA.name.toUpperCase();
      var memberB = memberB.name.toUpperCase();
      return memberA < memberB ? -1 : memberA > memberB ? 1 : 0;
    });
  }

  sortDriversAtoZ = () => {
    return this.state.drivers.sort(function (memberA, memberB) {
      var memberA = memberA.name.toUpperCase();
      var memberB = memberB.name.toUpperCase();
      return memberA < memberB ? -1 : memberA > memberB ? 1 : 0;
    });
  };

  onFormChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
      role: document.getElementById("new-member-role").value,
    });
  };

  render() {
    return (
      <div>
        <MemberForm
          member={this.state.member}
          mySubmitHandler={this.mySubmitHandler}
          onFormChange={this.onFormChange}
          updateState={this.updateState}
        />
        <DriverList
          drivers={this.state.drivers}
          fetchDrivers={this.fetchDrivers}
          sortDriversAtoZ={this.sortDriversAtoZ}
          deleteMember={this.deleteMember}
        />
        <GuestList
          guests={this.state.guests}
          sortGuestsAtoZ={this.sortGuestsAtoZ}
          fetchGuests={this.fetchGuests}
          deleteMember={this.deleteMember}
        />
      </div>
    );
  }
}
