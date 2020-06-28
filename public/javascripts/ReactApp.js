
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

  changeTabColour = (active, inactive1, inactive2) => {
    document.getElementById(active).setAttribute("class", "tab col active-tab");
    document.getElementById(inactive1).setAttribute("class", "tab col");
    document.getElementById(inactive2).setAttribute("class", "tab col");
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
        <div className="main-app container bg-white">
          <h1>Hello</h1>
          <AdminLogOut /> 
          
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
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
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
