
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
    this.changeTabColour('home-tab', 'pairing-tab', 'contact-tab')
  }

  showPairs = (e) => {
    e.preventDefault();
    this.setState({
      home: false,
      pairs: true,
      contact: false
    });
    this.changeTabColour('pairing-tab', 'home-tab', 'contact-tab')
  }

  showContact = (e) => {
    e.preventDefault();
    this.setState({
      home: false,
      pairs: false,
      contact: true
    });
    this.changeTabColour('contact-tab','pairing-tab', 'home-tab', )
  }

  changeTabColour = (active, inactive1, inactive2) => {
    document.getElementById(active).setAttribute("class", "tab col active-tab");
    document.getElementById(inactive1).setAttribute("class", "tab col");
    document.getElementById(inactive2).setAttribute("class", "tab col");
  }
 
  render() {
    if (this.state.loggedIn === false) {
      return (
        <form action="admin/login">
          {window.location.replace("admin/login")}
        </form>
      );
    } else {
      return (
        <div className="container">
          <div className="main-app container margin-top bg-white">
    
            <Header />
            <div className="row">
              <button id="home-tab" className="tab col button active-tab" onClick={this.showHome}>Home</button>
              <button id="pairing-tab" className="tab col button" onClick={this.showPairs}>Pairing</button>
              <button id="contact-tab" className="tab col button" onClick={this.showContact}>Contact</button>
            </div>
          
            <div className="main-content">
              {(() => {
                if (this.state.home === true) {
                  return (
                    // new component to go here
                    <div className="">
                      <AvailabilityTables />
                    </div>
                  );
                }

                if (this.state.pairs === true) {
                  return (
                    <Pairing />
                  )
                }

                if (this.state.contact === true) {
                  return (
                    <Contact />
                  );
                }
              })()}
            </div>
          </div>
        </div>
      );
    }
  }
}

ReactDOM.render(<ReactApp />, document.getElementById("root"));
