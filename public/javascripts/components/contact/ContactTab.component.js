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
    this.fetchMembers("driver");
    this.fetchMembers("guest");
    // this.fetchGuests("/guests");
  }

  fetchMembers = (role) => {
    fetch(`/members?role=${role}`)
    .then((response) => response.json())
    .then((data) => {
      var newState = {}
      newState[role + "s"] = data
      this.setState(newState);
      // this.setState({
      //   drivers: this.sortDriversAtoZ(),
      // });
    });
  }

  mySubmitHandler = (event) => {
    event.target.reset();
    event.preventDefault();
    let newMember = {
      name: this.state.name,
      role: this.state.role,
      address: this.state.address,
      telephone: this.state.telephone, 
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
      this.fetchMembers('guest');
      this.fetchMembers('driver');
    })
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
      this.fetchMembers('guest');
      this.fetchMembers('driver');
    });
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
          deleteMember={this.deleteMember}
        />
        <GuestList
          guests={this.state.guests}
          deleteMember={this.deleteMember}
        />
      </div>
    );
  }
}
