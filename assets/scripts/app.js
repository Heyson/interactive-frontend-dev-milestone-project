window.addEventListener('load', ()=> {
    let long;
    let lat;

    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition
        (position =>{
            console.log(position);
        })
    }else{
        h1.textContent = "Neep to accept Geo-location for acurate temperature display"
    }

});