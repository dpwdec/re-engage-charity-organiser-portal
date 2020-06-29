class MemberForm extends React.Component {

  // constructor() {
  //   super();
  //   this.state = {
  //     message: "test message: success/fail add member",
  //     member: {},
  //   }
  // };

  // mySubmitHandler = (event) => {
  //   event.preventDefault();
  //   let newMember = {
  //     name: this.state.name,
  //     role: this.state.role,
  //     address: this.state.address
  //   };

  //   fetch('/createMember', {
  //     method: 'post',
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(newMember)
  //   })
  //   .then(response => response.json())
  //   .then((result) => {
  //     this.setState({
  //       message: "Success!"
  //     })
  //   })
  // }

  // cancelCourse = () => {
  //   document.getElementById("new-member-form").reset();
  // }

  // onFormChange = (event) => {
  //   this.setState({
  //     [event.target.name]: event.target.value
  //   });
  // }

  // refreshPage = () => {
  //   window.location.reload(false);
  // }

  render() {

    // const { name, address, role, message } = this.props.state;

    return(
      <div>
        <h4 id="form-message"></h4>

        <form id="new-member-form" onSubmit={this.props.mySubmitHandler} >
          <h3>Add a new member</h3>
          <input required id="new-member-name" type="text" name="name" value={this.props.member.name} placeholder="name" onChange={this.props.onFormChange} ></input>
          <input required id="new-member-address" type="text" name="address" value={this.props.member.address} placeholder="address" onChange={this.props.onFormChange} ></input>
          <select id="new-member-role" name="role" value={this.props.member.role} onChange={this.props.onFormChange}>
            <option value="driver">driver</option>
            <option value="guest">guest</option>
          </select>


          <input type="submit" value="Submit"></input>
        </form>

       
      </div>
    )
  }
}
