window.addEventListener('load', ()=> {
    let lon;
    let lat;

    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition
        (position =>{
            lon = position.coords.lon;
            lat = position.coords.lat;

            const api = `https://api.openweathermap.org/data/2.5/forecast?id=524901&appid=8953477c68d7b2d80e71d5bb16a07eea/${lat},${lon}`;

            fetch(api)
.then(response => {
  return response.json();
})
.then(data => {
    console.log(data);
})
        });
   
    
    }
});