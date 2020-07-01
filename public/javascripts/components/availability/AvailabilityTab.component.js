class AvailabilityTables extends React.Component {

  constructor() {
    super()

  }

  render() {
    return(
      <div>
        <h3> Drivers </h3>
        <MemberAvailabilityTable role="driver"/>
        <h3> Guests </h3>
        <MemberAvailabilityTable role="guest"/>
      </div>
    )

  }

}