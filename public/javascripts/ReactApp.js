class ReactApp extends React.Component {
  constructor(props) {
    super(props);
    const token = sessionStorage.getItem("token");
    let loggedIn = true;
    if (token == null) {
      loggedIn = false;
    }
    this.state = {
      loggedIn,
    };
  }ç
 
  render() {
    if (this.state.loggedIn === false) {
      return (
        <form action="admin/login">
          {window.location.replace("admin/login")}
        </form>
      );
    } else {
      return (
      <div className="section">
          <div>
            <h1>Hello</h1>
            
            <MemberForm updatemethod={this.updateState} />
            <DriverList updatemethod={this.updateState} />
            <GuestList />
            <Pairing />
            <AdminLogOut />
          
          </div>

          
      </div>

      );
    }
  }
}

ReactDOM.render(<ReactApp />, document.getElementById("root"));
