class Pairing extends React.Component {

  generatePairs = () => {
    fetch(`/pairs`)
    .then(response => response.json())
    .then((data) => {
      console.log(data)
    })

  }

  render() {
    return (
      <button id="generate-pairs" onClick={generatePairs}>Generate</button>
    );
  }
}