class Pairing extends React.Component {

  constructor() {
    super();
    this.state = {
      pairs: []
    }
  }

  generatePairs = () => {
    fetch(`/pairs`)
    .then(response => response.json())
    .then((data) => {
      this.setState({
        pairs: data
      });
    })
  }

  render() {
    console.log(this.state)
    return (
      <button id="generate-pairs" onClick={this.generatePairs}>Generate</button>
    );
  }
}