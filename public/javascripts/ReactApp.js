class ReactApp extends React.Component {
  render() {
    return(
      <div>
        <h1>Hello</h1>
        <DriverList />
        <GuestList />
        <Pairing/>
      </div>
    );
  }
}

ReactDOM.render(<ReactApp />, document.getElementById('root'));
