class AvailabilityCell extends React.Component {
  constructor() {
    super();
    this.state = {
      driver_id: "",
      month: "",
      optionTrue: "",
      optionFalse: "",
      optionTBD: "",
    };
  }

  updateAvailability = (event) => {
    console.log(event.target.value);
    console.log(this.props.driver_id);
    console.log(this.props.monthName);

    let updateMember = {
      driver_id: this.props.driver_id,
      month_name: this.props.monthName,
      month_status: event.target.value,
    };

    fetch("/availability/update", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updateMember),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
      });
  };

  // updateSelectColour = () => {
  //   console.log("in the select colour function")
  //   var selector = document.getElementById("coloured-cell")
  //   selector.setAttribute("class", "test");
  // }


  render() {
    // var selector = document.getElementById("coloured-cell")
    return (

      <div className="col cell">


        <select
          id="coloured-cell"
          className="select-availability col dropdown"
          onChange={this.updateAvailability}
        >
          <option
            // add the success to select
            // onChange={selector.setAttribute("class", "success")}
            className="dropdown-item"
            value="true"
            selected={this.props.month == "true"}
          >
            True
          </option>
          <option
            // add danger to select
            // onChange={this.updateSelectColour("danger")}
            // className="danger"
            
            value="false"
            selected={this.props.month == "false"}
          >
            False
          </option>
          <option
            // add amber to select
            // onChange={this.updateSelectColour("amber")}
            // className="amber"
            value="tbd"
            selected={this.props.month == "undecided"}
          >
            TBD
          </option>
        </select>
      </div>
    );
  }
}
