// function initMap() {
//     var map;
//     var hanakawa = {lat: 34.706341, lng: 135.464121};
//     map = new google.maps.Map(document.getElementById('map-container'), {
// 	center: hanakawa,
// 	zoom: 17
//     });

//     var marker = new google.maps.Marker({
// 	position: hanakawa,
// 	map: map,
// 	title: 'Hankakawa House'
//     });
// }


var hanakawa = {lat: 34.706341, lng: 135.464121};
var tsukamoto = {lat: 34.7125467, lng: 135.4688821};
    
function initMap() {
     // Create a map and center it on Manhattan.
    var map = new google.maps.Map(document.getElementById('map-container'), {
	zoom: 17,
	center: hanakawa
    });
    
    // Instantiate a directions service.
     var directionsService = new google.maps.DirectionsService;
    // Create a renderer for directions and bind it to the map.
    var directionsDisplay = new google.maps.DirectionsRenderer({map: map});
    // Instantiate an info window to hold step text.
    var stepDisplay = new google.maps.InfoWindow;
   // Display the route between the initial start and end selections.
    calculateAndDisplayRoute(
    	directionsDisplay, directionsService, stepDisplay, map);
}

function calculateAndDisplayRoute(directionsDisplay, directionsService,
				  stepDisplay, map) {

    // Retrieve the start and end locations and create a DirectionsRequest using
    // WALKING directions.
    directionsService.route({
	origin: hanakawa,
	destination: tsukamoto,
	travelMode: google.maps.TravelMode.WALKING
    }, function(response, status) {
	// Route the directions and pass the response to a function to create
	// markers for each step.
	if (status === google.maps.DirectionsStatus.OK) {
	  	    directionsDisplay.setDirections(response);
	  	} else {
	    window.alert('Directions request failed due to ' + status);
	}
    });
}
