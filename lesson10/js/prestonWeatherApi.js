const requestURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=0a35ab49fbdb70d0abf8a387e577d3f4';
fetch(requestURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        document.getElementById('current-temp').textContent = jsObject.main.temp;
        document.getElementById('description').textContent = jsObject.weather[0].description;
        document.getElementById('humidity').textContent = jsObject.main.humidity;
        document.getElementById('wind-speed').textContent = jsObject.wind.speed;
    });