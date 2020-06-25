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
  }
  render() {
    if (this.state.loggedIn === false) {
      return window.location.replace("admin/login");
    } else {
      return (
        <div>
          <h1>Hello</h1>
          <Pairing />
          <AdminLogOut />
        </div>
      );
    }
  }
}

ReactDOM.render(<ReactApp />, document.getElementById("root"));
