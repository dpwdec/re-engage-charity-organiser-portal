function PairingsMap(props) {
  //initializing map
  var map = new google.maps.Map(document.getElementById("map-canvas"), {
    zoom: 12,
    center: { lat: 51.497309, lng: -0.147165 },
  });
  var icons = {
    start: new google.maps.MarkerImage(
      // URL
      // (width,height)
      new google.maps.Size(44, 32),
      // The origin point (x,y)
      new google.maps.Point(0, 0),
      // The anchor point (x,y)
      new google.maps.Point(22, 32)
    ),
    end: new google.maps.MarkerImage(
      // URL
      // (width,height)
      new google.maps.Size(44, 32),
      // The origin point (x,y)
      new google.maps.Point(0, 0),
      // The anchor point (x,y)
      new google.maps.Point(22, 32)
    ),
  };
  var makeMarker = (position, icon, title) => {
    new google.maps.Marker({
      position: position,
      map: map,
      icon: icon,
      label: title,
    });
  };
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
        makeMarker(
          pair.route.routes[0].legs[0].start_location,
          icons.start,
          pair.driver
        );
        makeMarker(
          pair.route.routes[0].legs[0].end_location,
          icons.end,
          pair.guest
        );
      } else {
        window.alert("Directions request failed due to " + status);
      }
    });
  });

  return null;
}
