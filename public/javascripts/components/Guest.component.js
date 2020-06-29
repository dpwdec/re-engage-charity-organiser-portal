function Guest (props) {
  return(
    <tr>
      <td>{props._id}</td>
      <td className="guestName">{props.name}</td>
      <td className="guestAddress">{props.address}</td>
    </tr>
  );
}
