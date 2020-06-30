function PairingsMap(props) {
  /* For more information please visit: https://developers.google.com/maps/documentation
  Here some resource helped me to make api works;
  DirectionsServices: https://developers.google.com/maps/documentation/javascript/directions
  Drawing Marker: https://developers.google.com/maps/documentation/javascript/examples/icon-complex
  Code samples: https://developers.google.com/maps/documentation/javascript/examples
  */
  var map = new google.maps.Map(document.getElementById("map-canvas"), {
    zoom: 12,
    center: { lat: 51.497309, lng: -0.147165 },
  });

  var icons = {
    start: new google.maps.MarkerImage(
      "https://img.icons8.com/fluent/48/000000/marker-storm.png",
      new google.maps.Size(20, 32),
      new google.maps.Point(0, 0),
      new google.maps.Point(0, 32)
    ),

    end: new google.maps.MarkerImage(
      "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
      new google.maps.Size(20, 32),
      new google.maps.Point(0, 0),
      new google.maps.Point(0, 32)
    ),
  };

  var startMarker = (position, icon, title) => {
    new google.maps.Marker({
      map: map,
      position: position,
      icon: icon,
      label: title,
    });
  };
  var endMarker = (position, icon, title) => {
    new google.maps.Marker({
      map: map,
      position: position,
      icon: icon,
      label: title,
    });
  };
  props.pairs.forEach((pair) => {
    console.log(pair.route.routes[0].legs[0]);
    var directionsService = new google.maps.DirectionsService();
    var directionsRenderer = new google.maps.DirectionsRenderer({
      suppressMarkers: true,
    });
    directionsRenderer.setMap(map);

    var request = {
      origin: pair.route.routes[0].legs[0].start_location,
      destination: pair.route.routes[0].legs[0].end_location,
      travelMode: "DRIVING",
    };
    directionsService.route(request, function (response, status) {
      if (status === "OK") {
        directionsRenderer.setDirections(response);
        startMarker(
          pair.route.routes[0].legs[0].start_location,
          icons.start,
          pair.driver
        );
        endMarker(
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
