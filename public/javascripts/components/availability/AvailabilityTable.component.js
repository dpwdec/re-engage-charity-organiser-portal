class MemberAvailabilityTable extends React.Component {

  constructor() {
    super();
    this.state = {
      months: [],
      members: []
    };
  };

  componentDidMount() {
    // console.log(this.props);
    fetch(`/availability/availability?role=${this.props.role}`)
    .then(response => {
      return response.json()
    }).then((result) => {
      this.setState({
        months: result.months,
        members: result.members 
      });
    });
  }

  render() {
    return (
      <div>
        <table className={`member-availability-${this.props.role}`}>
          <thead>
            <tr>
              <th>Name</th>
              <th>{this.state.months[0]}</th>
              <th>{this.state.months[1]}</th>
              <th>{this.state.months[2]}</th>
              <th>{this.state.months[3]}</th>
            </tr>
          </thead>

          <tbody>
            {this.state.members.map((member) => (
              <AvailabilityRow driver={member} months={this.state.months} key={member._id} id={member._id}/>
              ))
            }
          </tbody>
        </table>
      </div>
    );
  };

}