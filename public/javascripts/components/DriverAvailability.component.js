class DriverAvailability extends React.Component {

  constructor() {
    super();
    this.state = {
      drivers: [],
    };
  };

  componentDidMount() {
    fetch('/driversAvailability')
    .then(response => {
      return response.json()
    }).then((data) => {
      this.setState({
        drivers: data.drivers
      })
    })
  }

  render() {

    return(
      <div className="table">
        <table>
          {this.state.drivers.map((driver) => (
              <Driver 
                id={driver.id} 
                driver={driver.name} 
                currentmonth={driver.currentmonth} 
                secondmonth={driver.secondmonth} 
                thirdmonth={driver.thirdmonth}
                fourthmonth={driver.fourthmonth} 
              />
            )
          )
        }
        </table>
      </div>
    );

  }

  
}