  let map;
// Check browser for geolocation support

if('geolocation' in navigator){
    navigator.geolocation.getCurrentPosition(setPosition, showError);
}else{
    notificationElement.style.display = "block";
    notificationElement.innerHTML = "<p>Please allow Geolocation</p>";
}

function initMap() {
        map = new google.maps.Map(document.getElementById("map"), {
            center: { lat: 41.084045, lng: -73.874245 },
            zoom: 8,
        });


 var trafficLayer = new google.maps.TraffcLayer();
   trafficLayer.setMap(map);
}
   

   
    
