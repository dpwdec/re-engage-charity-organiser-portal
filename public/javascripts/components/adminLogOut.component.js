class AdminLogOut extends React.Component {
  constructor(props) {
    super(props);
  }

  logout = (e) => {
    e.preventDefault();
    sessionStorage.removeItem("token");
    window.location.replace("admin/login");
  };

  render() {
    return (
      <div id="logout-button">
        {/* <form id="logout" className="logout" onSubmit={this.logout}>
          <input
            id="logout"
            className="button login100-form-btn-small" 
            type="submit"
            value="log out"
          ></input>
        </form> */}
        {/* <div className="container-login100-form-btn"> */}
          <button id="logout" className="login100-form-btn-small" onClick={this.logout}>
            logout
          </button>
        {/* </div> */}
      </div>
      
    );
  }
}
