function Member(props) {
  return (
    <form
      className="col"
      className="delete-button"
      data-id={props.id}
      onSubmit={props.deleteMember}
    >
      <div className={`${props.role}-component row`}>
        <div className={`${props.role}-index col-2`}>{props.index + 1}</div>
        <div className={`${props.role}-name col`}>{props.name}</div>
        <div className={`${props.role}-address col`}>{props.address}</div>
        <div className={`${props.role}-telephone col`}>{props.telephone}</div>
        <input
          id={`delete-btn-${props.index}`}
          type="submit"
          value="Delete"
          className="login100-form-btn-small"
        ></input>
      </div>
    </form>
  );
}
