function initMap() {
    const loc = { lat: 27.59346362401388, lng: 85.29809058466019 };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 12,
      center: loc,
    });
    const marker = new google.maps.Marker({
      position: loc,
      map: map,
    });
  }