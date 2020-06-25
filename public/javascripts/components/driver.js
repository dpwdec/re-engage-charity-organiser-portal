function Driver (props) {
  return(
    <tr>
      <td>{props.drivers.id}</td>
      <td className="driverName">{props.drivers.name}</td>
      <td className="driverAddress">{props.drivers.address}</td>
    </tr>
  );
}
