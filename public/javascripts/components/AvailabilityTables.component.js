class AvailabilityTables extends React.Component {

  constructor() {
    super()

  }

  render() {
    return(
      <div>
        <MemberAvailabilityTable role="driver"/>
        <MemberAvailabilityTable role="guest"/>
      </div>
    )

  }

}