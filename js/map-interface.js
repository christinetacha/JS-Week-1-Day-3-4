var Bar = require('./../js/bar-crawl.js').Bar;

function addMapMarker(markerArray) {
  var yamhill = new Bar("Yamhill", 45.5175688, -122.6775161, "5-2:30am");
  var triple = new Bar("Triple Nickel", 45.5175688, -122.6261492, "5-2:30am");
  var markerArray = [yamhill, triple];
  console.log(markerArray);
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 45.516326, lng: -122.655503},
    zoom: 13,
    styles: [{
      featureType: 'poi',
      stylers: [{ visibility: 'off' }]  // Turn off points of interest.
    }, {
      featureType: 'transit.station',
      stylers: [{ visibility: 'off' }]  // Turn off bus stations, train stations, etc.
    }],
    disableDoubleClickZoom: true
  });

  for(var i = 0; i < markerArray.length; i++) {
    console.log("getting markerArray");
    var thisLat = markerArray[i].latitude;
    var thisLong = markerArray[i].longitude;
    console.log(thisLat);
    var marker = new google.maps.Marker({
      position: {lat: thisLat, lng: thisLong},
      title: "Bar",
      map: map
    });
  }

  console.log("what's good?");
}

exports.addMapMarker = addMapMarker;

// exports.yamhillMarker = yamhillMarker;
