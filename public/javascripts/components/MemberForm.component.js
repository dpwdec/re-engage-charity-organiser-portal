class MemberForm extends React.Component {

  constructor() {
    super();
    this.state = {
      message: "test message: success/fail add member",
      member: { name: "", role: "", address: "" },
    }
  };

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
    });
    this.cancelCourse()
  }

  cancelCourse = () => {
    document.getElementById("new-member-form").reset();
  }

  onFormChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {

    const { name, address, role, message } = this.state;

    return(
      <div>
        <h4 className="form-message"> {message} </h4>

        <form id="new-member-form" onSubmit={this.mySubmitHandler}>
          <h3>Add a new member</h3>
          <input required id="new-member-name" type="text" name="name" value={name} placeholder="name" onChange={this.onFormChange} ></input>
          <input required id="new-member-address" type="text" name="address" value={address} placeholder="address" onChange={this.onFormChange} ></input>
          <input required pattern="driver|guest" id="new-member-role" type="text" name="role" value={role} placeholder="role: driver or guest" onChange={this.onFormChange}></input>
          <input type="submit" value="Submit"></input>
        </form>

      </div>
    )
  }
}
