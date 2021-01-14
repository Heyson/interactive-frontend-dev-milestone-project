let map;
const key = AIzaSyD_9DaD7QnxGgYr5x4M2Z3wmbo-QHo74fY;
function initMap() {
    map = new google.maps.Map(document.getElementById("map"),{
        center: {lat: 42.36299, lng: -71.06162},
        zoom: 10,
    });

    var trafficLayer = new google.maps.TraffcLayer();
    trafficLayer.setMap(map);

   
    
}