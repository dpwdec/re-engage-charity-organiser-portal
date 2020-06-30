function Driver (props) {

  
  return(
    <form className="col" className="delete-button" data-id={props.id} onSubmit={props.deleteDriver}>
      <div className="driver-component row driver">
        <div className="driver-index col-2">{props.index + 1}</div>
        <div className="driverName col">{props.name}</div>
        <div className="driverAddress col">{props.address}</div> 
        <input type="submit" value="Delete"></input>
      </div>    
    </form>
  );
}
