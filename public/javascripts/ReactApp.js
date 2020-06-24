class ReactApp extends React.Component {
  render() {
    return (
      <div>
        <AdminLogin />
      </div>
    );
  }
}

ReactDOM.render(<ReactApp />, document.getElementById("root"));
