class AvailabilityRow extends React.Component {
  constructor() {
    super();
    this.state ={
      months:[
        "","","",""
      ]
    };
  }

  componentDidMount() {
    if(this.props.driver.availability === undefined) {
      this.props.driver.availability = {};
    }

    this.props.months.forEach((month, index) => {
      var monthsArray = this.state.months;

      monthsArray[index] = this.props.driver.availability[month] != undefined ? this.props.driver.availability[month].toString() : 'undecided'

      this.setState({
        months: monthsArray
      })
    });
  }

  render() {
    return(
      <tr>
        <td className="driverName">{this.props.driver.name}</td>
        <td className="month0">{this.state.months[0]}</td>
        <td className="month1">{this.state.months[1]}</td>
        <td className="month2">{this.state.months[2]}</td>
        <td className="month3">{this.state.months[3]}</td>
      </tr>
    )
  }
}