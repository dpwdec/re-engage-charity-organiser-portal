
  generateMap = () => {
   fetch(`/pairs/route`)
   .then((response) => { 
     return response.json() 
   }).then((data) => {
    console.log(data)
    var pointA = new google.maps.LatLng(data.json.routes[0].legs[0].start_location.lat, data.json.routes[0].legs[0].start_location.lng);
    var pointB = new google.maps.LatLng(data.json.routes[0].legs[0].end_location.lat, data.json.routes[0].legs[0].end_location.lng);
    
    myOptions = {
      zoom: 7,
      center: pointA,
      polylineOptions: { fillColor: '#FF0000', strokeOpacity: 1.0, strokeWeight: 10 }
    };  

    map = new google.maps.Map(document.getElementById('map-canvas'), myOptions);

    markerA = new google.maps.Marker({
      position: pointA,
      title: "point A",
      label: "A",
      map: map
    });

    markerB = new google.maps.Marker({
      position: pointB,
      title: "point B",
      label: "B",
      map: map
    });

    directionsDisplay = new google.maps.DirectionsRenderer({
      map: map,
    });

    var route = data.json

    console.log(route);

    var bounds = new google.maps.LatLngBounds(route.routes[0].bounds.southwest, route.routes[0].bounds.northeast);
    route.routes[0].bounds = bounds;

    route.routes[0].overview_path = google.maps.geometry.encoding.decodePath(route.routes[0].overview_polyline.points);


    route.routes[0].legs = route.routes[0].legs.map(function (leg) {
      leg.start_location = new google.maps.LatLng(leg.start_location.lat, leg.start_location.lng);
      leg.end_location = new google.maps.LatLng(leg.end_location.lat, leg.end_location.lng);

      leg.steps = leg.steps.map(function (step) {
        step.path = google.maps.geometry.encoding.decodePath(step.polyline.points);
        step.start_location = new google.maps.LatLng(step.start_location.lat, step.start_location.lng);
        step.end_location = new google.maps.LatLng(step.end_location.lat, step.end_location.lng);
        return step;
      });
      return leg;
    });

    route.request = { travelMode: 'DRIVING' }
    //route.request.travelMode = 'DRIVING';
    //route.request.destination = {}

    directionsDisplay.setDirections(route);
  })
 }

 generateMap()
// console.log(route.constructor)

// directionsDisplay.setDirections(response);



