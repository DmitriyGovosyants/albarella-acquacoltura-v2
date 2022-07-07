function initMap() {
  const uluru = { lat: 45.0576389, lng: 12.3537222 };
  const map = new google.maps.Map(document.querySelector(".google-map__init"), {
    zoom: 12,
    center: uluru,
  });
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}

window.initMap = initMap;