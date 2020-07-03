class AvailabilityRow extends React.Component {
    constructor() {
        super();
        this.state = {
            months: ["", "", "", ""]
        };
    }

    componentDidMount() {
        // console.log(this.props.driver._id);

        if (this.props.driver.availability === undefined) {
            this.props.driver.availability = {};
        }

        this
            .props
            .months
            .forEach((month, index) => {
                var monthsArray = this.state.months;
                monthsArray[index] = this.props.driver.availability[month] != undefined
                    ? this
                        .props
                        .driver
                        .availability[month]
                        .toString()
                    : "undecided";
                this.setState({months: monthsArray});
            });
        // console.log(this.props.months)
    }

    render() {
        return (
            <div className="available row container" id={`tr-${this.props.driver.name}`}>
                <div className="driverName col">{this.props.driver.name}</div>

                <div className="col cell">
                    <AvailabilityCell
                        driver_id={this.props.driver._id}
                        className="col cell"
                        month={this.state.months[0]}
                        monthName={this.props.months[0]}
                      />
                </div>
                <div className="col cell">
                    <AvailabilityCell
                        driver_id={this.props.driver._id}
                        className="col cell"
                        month={this.state.months[1]}
                        monthName={this.props.months[1]}/>
                </div>
                <div className="col cell">
                    <AvailabilityCell
                        driver_id={this.props.driver._id}
                        className="col cell"
                        month={this.state.months[2]}
                        monthName={this.props.months[2]}/>
                </div>
                <div className="col cell">
                    <AvailabilityCell
                        driver_id={this.props.driver._id}
                        className="col cell"
                        month={this.state.months[3]}
                        monthName={this.props.months[3]}/>
                </div>
            </div>
        );
    }
}
