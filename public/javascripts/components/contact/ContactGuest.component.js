function Guest(props) {
  return (
    <form
      className="col"
      className="delete-button"
      data-id={props.id}
      onSubmit={props.deleteMember}
    >
      <div className="guest-component row guest">
        <div className="guest index col-2">{props.index + 1}</div>
        <div className="guestName col">{props.name}</div>
        <div className="guestAdress col">{props.address}</div>
        <div className="guestTelephone col">{props.telephone}</div>
        <input type="submit" value="Delete"></input>
      </div>
    </form>
  );
}
