class ReactApp extends React.Component {
  render() {
    return(
      <div>
        <h1>Hello</h1>
        <DriverList />
      </div>
    );
  }
}

ReactDOM.render(<ReactApp />, document.getElementById('root'));
// ReactDOM.render(<ReactApp />, document.body);
// ReactDOM.render(<DriverList />, document.getElementById('root'));