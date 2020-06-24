class DriverList extends React.Component {

  constructor() {
    super();
    this.state = {
      members: [],
    };
  };

  componentDidMount() {
    this.fetchData('/drivers'); // requesting the same route as on updatestate
  }

  fetchData = (apiToFetch) => {
    fetch(apiToFetch)
    .then(response => response.json())
    .then((data)=> {
      console.log(1);
      console.log(data);
      console.log(data.role);
      this.setState({
        members: data,
      });
    });
  }

  updateState = () => {
    this.fetchData('/drivers') // this argument is passed in above, returns HomepageController.DriverList
  }

  render() {

    let data = this.state.members;

    return(
      <div>
        <h3>Drivers List</h3>
        <section class="driver-list">

            <p>Name</p>


          {data.map((driver) => {
            return(

                <p> { driver.name } </p>

            )
          })}
        </section>
      </div>
    )
  }
}
