class AdminApp extends React.Component {
  render() {
    return (
      <div className="container bg-white">
        <AdminLogin />
      </div>
    );
  }
}

ReactDOM.render(<AdminApp />, document.getElementById("root"));
