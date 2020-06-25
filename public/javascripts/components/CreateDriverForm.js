class CreateDriverForm extends React.Component {
    
  constructor() {
    super();
    this.state = {

    }
  };

  mySubmitHandler = (event) => {
    event.preventDefault();
    let newDriver = {body: this.state.body};

    fetch('/createDriver', {
      method: 'post', 
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newDriver)
    })
    .then((response) => {
      this.props.updatemethod();
    });
    this.cancelCourse()
  }

  cancelCourse = () => {
    document.getElementById("new-driver-form").reset();
  }

  myChangeHandler = (event) => {
    this.setState({body: event.target.value});
  }

  render() {
    return(
      <form id="new-driver-form" onSubmit={this.mySubmitHandler}>
        <h3>Add a new driver</h3>
        <input id="new-driver-name" type="text" placeholder="driver's name" onChange={this.myChangeHandler} ></input>
        <input id="new-driver-address" type="text" placeholder="driver's address" onChange={this.myChangeHandler} ></input>   
        <input type="submit" value="Submit"></input>
      </form>
    )
  }
}