// Initialize and add the map
function initMap() {
    // The location of Uluru
    const uluru = { lat: -1.2821660064007763, lng: 36.82230887581876};//-1.2821660064007763, 36.82230887581876
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }