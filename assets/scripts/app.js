window.addEventListener('load', ()=> {
    let long;
    let lat;

    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition
        (position =>{
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const api = `https://data.climacell.co/v4/locations?apikey=YTqgjLWExGlAk7S6os0GN9Cb377tV7F8`
        });
    }else{
        h1.textContent = "Neep to accept Geo-location for acurate temperature display"
    }

});