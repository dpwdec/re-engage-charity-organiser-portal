class ReactApp extends React.Component {
  render() {
    return (
      <div>
        <AdminLogin />
        <h1>Hello</h1>
        <Pairing />
      </div>
    );
  }
}

ReactDOM.render(<ReactApp />, document.getElementById("root"));
