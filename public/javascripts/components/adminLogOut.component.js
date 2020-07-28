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
          <button id="logout" className="login100-form-btn-small" onClick={this.logout}>
            logout
          </button>
      </div>
      
    );
  }
}
