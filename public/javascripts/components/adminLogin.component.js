class AdminLogin extends React.Component {
  constructor() {
    const token = sessionStorage.getItem("token");
    let loggedIn = true;
    if (token == null) {
      loggedIn = false;
    }
    super();
    this.state = {
      adminName: "",
      password: "",
      loggedIn,
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
      .then((response) => {
        console.log(response);
        if (response.ok) {
          console.log(response.json());
          return response.json();
        }
      })
      .then((data) => {
        console.log(data);
        if (data.success === true) {
          sessionStorage.setItem("token", data.admin._id);
          console.log(sessionStorage);
          window.location.replace("/");
        } else {
          alert(`${data.message}`);
        }
      });
  };

  homeButton = (e) => {
    e.preventDefault();
    window.location.replace("/");
  };

  render() {
    if (this.state.loggedIn === false) {
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
    } else {
      return (
        <form onSubmit={this.homeButton}>
          <p>log out first</p>
          <input id="home" class="button" type="submit" value="home"></input>
        </form>
      );
    }
  }
}
