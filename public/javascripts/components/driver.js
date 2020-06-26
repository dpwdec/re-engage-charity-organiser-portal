function Driver (props) {
  return(
    <tr>
      <td>{props.id}</td>
      <td className="driverName">{props.name}</td>
      <td className="driverAddress">{props.address}</td>
      <td className="driverAvailability">{props.availability}</td>
    </tr>
  );
}
