window.addEventListener('load', ()=> {
    let lon;
    let lat;

    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition
        (position =>{
            lon = position.coords.lon;
            lat = position.coords.lat;
            const proxy = "cors-anywhere.herokuapp.com/";
            const api = `http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=8953477c68d7b2d80e71d5bb16a07eea`;

            fetch(api)

  


        });
   
    
    }
});