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
    console.log(this.props.driver._id);

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
    console.log(this.props.months)
  }

  render() {

    return(
      <tr id={`tr-${this.props.driver.name}`}>
        <td className="driverName">{this.props.driver.name}</td>
        <AvailabilityCell driver_id={this.props.driver._id} month={this.state.months[0]} monthName={this.props.months[0]} />
        <AvailabilityCell driver_id={this.props.driver._id} month={this.state.months[1]} monthName={this.props.months[1]}/>
        <AvailabilityCell driver_id={this.props.driver._id} month={this.state.months[2]} monthName={this.props.months[2]}/>
        <AvailabilityCell driver_id={this.props.driver._id} month={this.state.months[3]} monthName={this.props.months[3]}/>
      </tr>
    )
  }
}