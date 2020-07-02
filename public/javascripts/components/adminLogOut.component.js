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
      <div>
        <form id="log-out-form" className="logout" onSubmit={this.logout}>
          <input
            id="logout"
            className="button login100-form-btn-small" 
            type="submit"
            value="log out"
          ></input>
        </form>
      </div>
    );
  }
}
