function PairItem(props) {
  var colorStringPalet = ["green", "	blue", "yellow", "pink", "orange"];
  return (
    <tr id={"pair-" + props.id}>
      <td>{props.id}</td>
      <td className="driver">{props.driver}</td>
      <td className="guest">{props.guest}</td>
      <td className="distance">{props.distance}</td>
      <td>
        <font
          color={colorStringPalet[(props.id - 1) % colorStringPalet.length]}
        >
          ---
        </font>
      </td>
    </tr>
  );
}
