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

    var request = {
      origin: { query: pair.route.routes[0].legs[0].start_address },
      destination: { query: pair.route.routes[0].legs[0].end_address },
      travelMode: "DRIVING",
    };
    directionsService.route(request, function (response, status) {
      if (status === "OK") {
        directionsRenderer.setDirections(response);
      } else {
        window.alert("Directions request failed due to " + status);
      }
    });
  });

  return null;
}
