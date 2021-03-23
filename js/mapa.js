// Initialize and add the map
function initMap() {
    // The location of Uluru
    const office = { lat: -0.902060, lng: -89.611955 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 18,
        center: office,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
        position: office,
        map: map,
    });
}
