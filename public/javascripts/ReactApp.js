class ReactApp extends React.Component {
  
  // constructor() {
  //   super();
  //   this.state = {
  //     message: "",
  //     member: { name: "", role: "", address: "" },
  //   };
  // }

  // componentDidMount() {
  //   this.fetchData('/');
  // }

  // fetchData = (apiToFetch) => {
  //   fetch(apiToFetch)
  //   .then(response => response.json())
  //   .then((data) => {
  //     this.setState({
  //       member: data
  //     })
  //   })
  // }

  // updateState = () => {
  //   this.fetchData('/')
  // }

  render() {
    return(
      <div>
        <h1>Hello</h1>
        <MemberForm updatemethod={this.updateState}/>
        <DriverList updatemethod={this.updateState}/>
        <GuestList />
        <Pairing/>
      </div>
    );
  }
}

ReactDOM.render(<ReactApp />, document.getElementById('root'));
