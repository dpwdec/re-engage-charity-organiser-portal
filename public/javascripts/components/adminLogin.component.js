class AdminLogin extends React.Component {
  render() {
    return (
      <div className="login">
        <label>AdminName:</label>
        <input type="text" placeholder="Admin" required></input>
        <label>Password:</label>
        <input type="password" placeholder="Password" required></input>
        <input type="submit" value="login"></input>
      </div>
    );
  }
}
