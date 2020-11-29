const requestURL = 'https://api.openweathermap.org/data/2.5/weather?id=5607916&appid=0a35ab49fbdb70d0abf8a387e577d3f4';
fetch(requestURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        document.getElementById('current-temp').textContent = jsObject.main.temp;
        document.getElementById('description').textContent = jsObject.weather[0].description;
        document.getElementById('humidity').textContent = jsObject.main.humidity;
        document.getElementById('wind-speed').textContent = jsObject.wind.speed;

        const t = parseFloat(document.getElementById('current-temp').textContent);
        const s = parseFloat(document.getElementById('wind-speed').textContent);
        const output = "Not Applicable";

        let w = 35.74 + (0.6215 * t) - (35.75 * Math.pow(s, 0.16)) + (0.4275 * t * Math.pow(s, 0.16));
        w = Math.round(w);

        if (t <= 50 && s > 3) {
            document.getElementById('wind').innerHTML = w;
        } else {
            document.getElementById('wind').innerHTML = output;
        }

    });