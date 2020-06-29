function PairingsMap(props) {
  //initializing map
  var map = new google.maps.Map(document.getElementById("map-canvas"), {
    zoom: 12,
    center: { lat: 51.497309, lng: -0.147165 },
  });

  props.pairs.forEach((pair) => {
    var directionsService = new google.maps.DirectionsService();
    var directionsRenderer = new google.maps.DirectionsRenderer();
    directionsRenderer.setMap(map);
  });

  return null;
}
