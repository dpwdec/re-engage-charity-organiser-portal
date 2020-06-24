class AdminLogin extends React.Component {
  constructor() {
    super();
    this.state = {
      adminName: "",
      password: "",
    };
  }

  handleChangeName = (e) => {
    this.setState({
      adminName: e.target.value,
    });
  };
  handleChangePassword = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  login = (e) => {
    e.preventDefault();
    const admin = {
      adminName: this.state.adminName,
      password: this.state.password,
    };
    console.log(admin);

    fetch("/admin/login", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(admin),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  render() {
    return (
      <form id="admin-login-form" className="login" onSubmit={this.login}>
        <label>AdminName:</label>
        <input
          id="admin"
          type="text"
          placeholder="Admin"
          required
          onChange={this.handleChangeName}
          value={this.state.adminName}
        ></input>
        <label>Password:</label>
        <input
          id="password"
          type="password"
          placeholder="Password"
          required
          onChange={this.handleChangePassword}
          value={this.state.password}
        ></input>
        <input type="submit" value="login" id="login"></input>
      </form>
    );
  }
}
