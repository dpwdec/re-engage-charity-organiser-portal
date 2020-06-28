class DriverAvail extends React.Component {

  constructor() {
    super();
    this.state = {
      drivers: [],
    };
  };

  componentDidMount() {
    fetch('/driverAvail')
    .then(response => {
      return response.json()
    }).then((data) => {
      this.setState({
        drivers: data
      })
    })
  }

  render() {

    let data = this.state.drivers;

    return(
      <div>
        <h2> Driver Availabilities </h2>
        <table className="table">
          {data.map((driver) => {
              <Driver 
              key={driver.id}
              driver={driver.name}
              />
            })
          }
        </table>
      </div>
    );

  }

  
}