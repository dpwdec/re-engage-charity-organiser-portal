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
      console.log(data)
      this.setState({
        pairs: data.pairs
      });
    })
  }

  render() {
    // console.log(this.state)
    // console.log(this.state.pairs)
    return (
      <div>
        <button id="generate-pairs" onClick={this.generatePairs}>Generate</button>
        <div className="table">
          { this.state.pairs.map((pair)=> {
            return (<p> {pair.driver + pair.guest} </p>)
            })
          }
        </div>
      </div>
      

    );
  }
}