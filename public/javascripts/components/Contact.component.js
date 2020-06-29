class Contact extends React.Component {

  constructor() {
    super();
    this.state = {
      drivers: [],
      message: "test message: success/fail add member",
      member: {},
    };
  };

  componentDidMount() {
    this.fetchDrivers('/drivers');
  }

  fetchDrivers = () => {
    fetch('/drivers')
    .then(response => response.json())
    .then((data) => {
      this.setState({
        drivers: data,
      });
      this.setState({
        drivers: this.sortDriversAtoZ(),
      });
      
    });
  }

  mySubmitHandler = (event) => {
    event.preventDefault();
    let newMember = {
      name: this.state.name,
      role: this.state.role,
      address: this.state.address
    };

    fetch('/createMember', {
      method: 'post',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newMember)
    })
    .then(response => response.json())
    .then((result) => {
      this.setState({
        message: "Success!"
      })
    })
    this.setState({
      drivers: this.sortDriversAtoZ(),
    });
  }

  cancelCourse = () => {
    document.getElementById("new-member-form").reset();
  }

  onFormChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  refreshPage = () => {
    window.location.reload(false);
  }

  sortDriversAtoZ = () => {
    return this.state.drivers.sort(function(memberA, memberB) {
    var memberA = memberA.name.toUpperCase();
    var memberB = memberB.name.toUpperCase();
      return (memberA < memberB) ? -1 : (memberA > memberB) ? 1 : 0;
    });
  }



  render() {
    return (
      <div>
        <MemberForm 
            member={this.state.member} 
            mySubmitHandler={this.mySubmitHandler} 
            cancelCourse={this.cancelCourse} 
            onFormChange={this.onFormChange} 
            refreshPage={this.refreshPage} 
        />
        <DriverList 
          drivers={this.state.drivers} 
          fetchDrivers={this.fetchDrivers} 
          sortDriversAtoZ={this.sortDriversAtoZ} 
          componentDidMount={this.componentDidMount}
        />
        <GuestList />
      </div>
    );
  }
}

