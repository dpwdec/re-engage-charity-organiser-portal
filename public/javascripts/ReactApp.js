
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
      home: true,
      pairs: false,
      contact: false
    };
  }

  showHome = (e) => {
    e.preventDefault();
    this.setState({
      home: true,
      pairs: false,
      contact: false
    });
  }

  showPairs = (e) => {
    e.preventDefault();
    this.setState({
      home: false,
      pairs: true,
      contact: false
    });
  }

  showContact = (e) => {
    e.preventDefault();
    this.setState({
      home: false,
      pairs: false,
      contact: true
    });
  }
 
  render() {
    console.log(this.state)
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
            
            <form id="home" className="home" onSubmit={this.showHome}>
              <input type="submit" value="home" id="home"></input>
            </form>
            <form id="pairs" className="pairs" onSubmit={this.showPairs}>
              <input type="submit" value="pairs" id="pairs"></input>
            </form>
            <form id="contact" className="contact" onSubmit={this.showContact}>
              <input type="submit" value="contact" id="contact"></input>
            </form>


            <div id="content"></div>
            {(() => {
              if (this.state.home === true) {
                return (
                "Homepage"
                );
              }

              if (this.state.pairs === true) {
                return (
                "Pairs"
                );
              }

              if (this.state.contact === true) {
                return (
                "Contact"
                );
              }
            })()}

            {/* <MemberForm updatemethod={this.updateState} />
            <DriverList updatemethod={this.updateState} />
            <GuestList />
            <Pairing />
            <AdminLogOut />  */}
          
          </div>

          
      </div>

      );
    }
  }
}

ReactDOM.render(<ReactApp />, document.getElementById("root"));
