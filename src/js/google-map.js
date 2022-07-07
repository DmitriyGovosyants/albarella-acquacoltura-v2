function initMap() {
  // The location of Uluru
  const uluru = { lat: 45.0576389, lng: 12.3537222 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.querySelector(".google-map"), {
    zoom: 10,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}

window.initMap = initMap;