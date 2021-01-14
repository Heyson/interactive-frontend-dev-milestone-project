  let map;

function initMap() {
        map = new google.maps.Map(document.getElementById("map"), {
            center: { lat: 41.084045, lng: -73.874245 },
            zoom: 8,
        });

}
    var trafficLayer = new google.maps.TraffcLayer();
    trafficLayer.setMap(map);

   
    
