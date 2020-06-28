
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
      <div className="Main Component">
            <h1>Hello</h1>
            <AdminLogOut /> 
            
            <div className="tabs">
              <button onClick={this.showHome}>Home</button>
              <button onClick={this.showPairs}>Pairing</button>
              <button onClick={this.showContact}>Contact</button>
            </div>
            

            {(() => {
              if (this.state.home === true) {
                return (
                  <Tabs />
                );
              }

              if (this.state.pairs === true) {
                return (
                  <Pairing />
                )
              }

              if (this.state.contact === true) {
                return (
                  <div className="contact-page">
                    <Contact />
                  </div>
                );
              }
            })()}

            
            

         
      </div>

      );
    }
  }
}

ReactDOM.render(<ReactApp />, document.getElementById("root"));
