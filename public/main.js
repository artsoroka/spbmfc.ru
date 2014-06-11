var map;

function initialize() {
    var mapOptions = {
        zoom: 10,
        center: new google.maps.LatLng(59.933, 30.336)
    };
  
    map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

    map._markers = []; 
    map.addMarker = function(location){
    
      var marker = new google.maps.Marker({
          position: location,
          map: this,
          title: 'Hello World!', 
          draggable:true
      });

      var infowindow = new google.maps.InfoWindow({
          content: "hey motherfucker"
      });

      this._markers.push(marker); 

      google.maps.event.addListener(marker, 'click', function() {
          infowindow.open(map,marker);
          map.panTo(marker.position); 
      });

      google.maps.event.addListener(marker, 'dragend', function() {
          console.log(marker.position); 
      });

    }

}

google.maps.event.addDomListener(window, 'load', initialize);

addMarker = function(){
    var location = new google.maps.LatLng(59.933, 30.336); 
    map.addMarker(location); 

}


