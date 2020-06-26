class DriverAvailability extends React.Component {

  constructor() {
    super();
    this.state = {
      drivers: [],
    };
  };

  componentDidMount() {
    fetch('/driversAvailability')
    .then(response => response.json())
    .then((data)) => {
      this.setState({

      })
    }
  }

  render() {

    return(
      <div>
        
      </div>
    )

  }

}