class AvailabilityRow extends React.Component {
  constructor() {
    super();
    this.state ={
      iHaveMounted: false
    };
  }

  componentDidMount() {
    if(this.props.driver.availability === undefined) {
      this.props.driver.availability = {};
    }

    if(this.props.driver.availability[this.props.months[0]] != undefined) {
      this.setState({
        month0: this.props.driver.availability[this.props.months[0]].toString()
      });
    } else {
      this.setState({
        month0: 'undecided'
      });
    }

    if(this.props.driver.availability[this.props.months[1]] != undefined) {
      this.setState({
        month1: this.props.driver.availability[this.props.months[1]].toString()
      });
    } else {
      this.setState({
        month1: 'undecided'
      });
    }

    if(this.props.driver.availability[this.props.months[2]] != undefined) {
      this.setState({
        month2: this.props.driver.availability[this.props.months[2]].toString()
      });
    } else {
      this.setState({
        month2: 'undecided'
      });
    }

    if(this.props.driver.availability[this.props.months[3]] != undefined) {
      this.setState({
        month3: this.props.driver.availability[this.props.months[3]].toString()
      });
    } else {
      this.setState({
        month3: 'undecided'
      });
    }

    this.setState({
      iHaveMounted: true
    });
  }

  render() {

    if(this.state.iHaveMounted) {
      console.log(this.state.month0);
      console.log(this.props);
    }
    return(
      <tr>
        {this.state.iHaveMounted ? <td className="driverName">{this.props.driver.name}</td> : <td></td>}
        {this.state.iHaveMounted ? <td className="month0">{this.state.month0}</td> : <td></td>}
        {this.state.iHaveMounted ? <td className="month1">{this.state.month1}</td> : <td></td>}
        {this.state.iHaveMounted ? <td className="month2">{this.state.month2}</td> : <td></td>}
        {this.state.iHaveMounted ? <td className="month3">{this.state.month3}</td> : <td></td>}
      </tr>
    // <tr>
    //   <td>{props._id}</td>
    //   <td className="driverName">{this.props.driver.name}</td>
    //   <td className="month0">{this.state.month0}</td>
    //   <td className="month0">NA</td>
    //   <td className="month0">NA</td>
    //   <td className="month0">NA</td>
    // </tr>
    )
  }
}