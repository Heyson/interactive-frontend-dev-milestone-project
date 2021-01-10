
// Select Elements
    const proxy = "cors-anywhere.herokuapp.com/";
    const iconElement = document.querySelector(".weather-icon");
    const tempElement = document.querySelector(".temperature-value p");
    const descElement = document.querySelector(".temperature-description p");
    const locationElement = document.querySelector(".location p");
    const notificationElement = document.querySelector(".notificatio");

// App Data
    const weather = {};
    
    weather.temperature = {
        unit : "celsius"
    }

// App Consts and Vars
const KELVIN = 273;
// API Key
const key = "8953477c68d7b2d80e71d5bb16a07eea"

// Show Error when Geolocation is not shown
function showError(error){
    notificationElement.style.display = "block";
    notificationElement.innerHTML = `<p> ${error.message}</p>`;
}

// Check if Browser Supports Geolocation
if('geolocation' in navigator){
    navigator.geolocation.getCurrentPosition(setPosition, showError);
}else{
    notificationElement.style.display = "block";
    notificationElement.innerHTML = "<p>Please allow Geolocation</p>";
}

// Set Users Position
function setPosition(position){
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;

    getWeather(latitude, longitude);
}



// Get Weather From API Provider
function getWeather(latitude, longitude){
    let api = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`;

    fetch(api)
    .then(function(response){
        let data = response.json();
        return data;
    })
    .then(function(data){
        weather.temperature.value = Math.floor(data.main.temp - KELVIN);
        weather.description = data.weather[0].description;
        weather.iconId = data.weather[0].icon;
        weather.city = data.name;
        weather.country = data.sys.country;
    })
    .then(function(){
        displayWeather();        
    });  
}
// Display Weather To UI
function displayWeather(){
    iconElement.innerHTML = `<img src="assets/images/icons/${weather.iconId}.png"/>`;
    templateElement.innerHTML = `${weather.temperature.value}°<span>C</span>`;
    descElement.innerHTML = weather.description;
    locationElement.innerHTML = `${weather.city}, ${weather.country}`;
}
