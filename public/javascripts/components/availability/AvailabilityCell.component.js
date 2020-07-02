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

  render() {
    return (
      <td className="month col-8">
        <select
          className="select-availability"
          onChange={this.updateAvailability}
        >
          <option
            className="success"
            value="true"
            selected={this.props.month == "true"}
          >
            True
          </option>
          <option
            className="danger"
            value="false"
            selected={this.props.month == "false"}
          >
            False
          </option>
          <option
            className="amber"
            value="tbd"
            selected={this.props.month == "undecided"}
          >
            TBD
          </option>
        </select>
      </td>
    );
  }
}
