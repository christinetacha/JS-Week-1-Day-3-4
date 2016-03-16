function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 45.5324167, lng: -122.655503},
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
}
