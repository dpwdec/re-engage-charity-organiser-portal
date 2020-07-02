class AdminApp extends React.Component {
  render() {
    return (
      <div className="transparent-wrapper text-center container margin-top bg-white shadow p-3 mb-5 rounded ">
        <div className="center-wrapper row">
          <AdminLogin />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<AdminApp />, document.getElementById("root"));
