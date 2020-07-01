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
    this.updateMembers();
  }

  updateMembers = () => {
    this.fetchMembers("driver");
    this.fetchMembers("guest");
  }

  fetchMembers = (role) => {
    fetch(`/members?role=${role}`)
    .then((response) => response.json())
    .then((data) => {
      var newState = {}
      newState[role + "s"] = this.sortAtoZ(data)
      this.setState(newState);
    });
    debugger;
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
    .then((response) => { this.updateMembers() })
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
    .then((response) => { this.updateMembers() })
  }


  sortAtoZ(array) {
    return array.sort(function (memberA, memberB) {
      var memberA = memberA.name.toUpperCase();
      var memberB = memberB.name.toUpperCase();
      return memberA < memberB ? -1 : memberA > memberB ? 1 : 0;
    });
  }

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
        />
         <MemberList
          members={this.state.drivers}
          role={"driver"}
          deleteMember={this.deleteMember}
        />
        <MemberList
          members={this.state.guests}
          role={"guest"}
          deleteMember={this.deleteMember}
        />
      </div>
    );
  }
}
