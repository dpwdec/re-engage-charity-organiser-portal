class AvailabilityCell extends React.Component {

  constructor() {
    super();
      this.state = {
        driver_id: "",
        month: "", 
        optionTrue: "",
        optionFalse: "",
        optionTBD: ""
      }
  }

    

    // obtain driver ID, needed to do in parent component 
    // in order for child component to successfully update 
    // render drop-down: t, f, unconfirmed
    // on click, the value is passed as an update via fetch request
    // create route
    // create controller to handle fetch request 
    // on success, this.state is updated via fetch request response/result
    // sent as 'data' --> align with this.state variables in both render/constructor

    render() {
      
      // if this.props.month = true; display option id="true"

      return(
        <td className="month">

        <select className="select-availability">
          <option value="true" selected={this.props.month == "true"}>True</option>
          <option value="false" selected={this.props.month == "false"}>False</option>
          <option value="tbd" selected={this.props.month == "undecided"}>TBD</option>
        </select>

        </td>

      )
      

    }

}