class DriverList extends React.Component {

  constructor() {
    super();
    this.state = {
      drivers: [],
    };
  };

  componentDidMount() {
    this.fetchData('/drivers'); // requesting the same route as on updatestate
  }

  // fetchData = (apiToFetch) => {
  //   fetch(apiToFetch)
  //   .then(response => response.json())
  //   .then((data) => {
  //     console.log("check data")
  //     console.log(data);
  //     this.setState({
  //       drivers: data,
  //     });
  //   });
  // }

  driver = () => {
    fetch('/drivers')
    .then((response) => {
      return response.json()
    }).then((data) => {
      console.log(data)
    })
  }

  // updateState = () => {
  //   this.fetchData('/drivers') // this argument is passed in above, returns HomepageController.DriverList
  // }

  render() {

    // let data = this.state.drivers;

    return(
      <div>
        <h3>Drivers List</h3>
        // <form>
        //   <input type="submit" value="Submit"></input>
        // </form>
        // <section class="driver-list">
        //
        //     <p>Name</p>
        //
        //
        //   {data.map((driver) => {
        //     return(
        //
        //         <p> { driver.name } </p>
        //
        //     )
        //   })}
        // </section>
      </div>
    )
  }
}
