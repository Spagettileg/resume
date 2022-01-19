function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 3,
        center: {
            lat: 46.619261,
            lng: -33.134766
        }
    });
    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    var locations = [
        { lat: 51.511924, lng: -0.080823 }, // Fenchurch St, London
        { lat: 51.536471, lng: -0.346118 }, // Greenford, UK
        { lat: 50.880939, lng: -1.24068 }, // Whiteley, Hants
        { lat: 51.2111975, lng: -1.4919233 },  // Andover, Hants 
        { lat: 51.0748, lng: -1.08785 } // Ropley, Hants
    ];

    var markers = locations.map(function(location, i) { // locations.map() is a JS function and not Google. Similar to a forEach() function
        return new google.maps.Marker({ // x2 arguments location & index 'i'. Where we are in the array (length = 26 letters) 
            position: location, // position sets the current location 
            label: labels[i % labels.length] // Need to get one of the labels out of the string created. 
        }); // % Operator will allow a loop from A-Z to A again, without error warning message
    });

    var markerCluster = new MarkerClusterer(map, markers, { // creates the marker image for the map & creates them in a cluster, if close together
        imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
    });
}