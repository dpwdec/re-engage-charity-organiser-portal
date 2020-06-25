class MemberForm extends React.Component {

  constructor() {
    super();
    this.state = {

    }
  };

  mySubmitHandler = (event) => {
    event.preventDefault();
    let newMember = {body: this.state.body};

    fetch('/createMember', {
      method: 'post',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newMember)
    })
    .then((response) => {
      this.props.updatemethod();
    });
    this.cancelCourse()
  }

  cancelCourse = () => {
    document.getElementById("new-member-form").reset();
  }

  myChangeHandler = (event) => {
    this.setState({body: event.target.value});
  }

  render() {
    return(
      <form id="new-member-form" onSubmit={this.mySubmitHandler}>
        <h3>Add a new member</h3>
        <input id="new-member-name" type="text" placeholder="member's name" onChange={this.myChangeHandler} ></input>
        <input id="new-member-address" type="text" placeholder="member's address" onChange={this.myChangeHandler} ></input>
        <input id="new-member-role" type="text" placeholder="member's role" onChange={this.myChangeHandler} ></input>
        <input type="submit" value="Submit"></input>
      </form>
    )
  }
}
