class Driver extends React.Component {
  constructor() {
    super();
    this.state = {}
  };

  componentDidMount() {
    fetch(`/driverid?=${this.props.data}`)
  }
}
