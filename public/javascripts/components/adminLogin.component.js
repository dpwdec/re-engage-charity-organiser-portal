class AdminLogin extends React.Component {
  constructor() {
    super();
    this.state = {
      adminName: "",
      password: "",
    };
  }

  handleChangeName = (e) => {
    console.log(e.target);
    this.setState({
      adminName: e.target.value,
    });
  };
  handleChangePassword = (e) => {
    console.log(e.target);
    this.setState({
      password: e.target.value,
    });
  };

  render() {
    return (
      <form id="admin-login-form" className="login" onSubmit={this.login}>
        <label>AdminName:</label>
        <input
          type="text"
          placeholder="Admin"
          required
          onChange={this.handleChangeName}
          value={this.state.adminName}
        ></input>
        <label>Password:</label>
        <input
          type="password"
          placeholder="Password"
          required
          onChange={this.handleChangePassword}
          value={this.state.password}
        ></input>
        <input type="submit" value="login"></input>
      </form>
    );
  }
}
