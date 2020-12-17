const requestURL = "//api.openweathermap.org/data/2.5/weather?q=preston,us&appid=78b78816d97bf3ea58188b7f4b8332fb&units=imperial";
fetch(requestURL).then(response => response.json()).then(jsObject => {
    console.log(jsObject), document.getElementById("current-temp").textContent = jsObject.main.temp, console.log('temp', jsObject.main.temp), document.getElementById("description").textContent = jsObject.weather[0].description, document.getElementById("humidity").textContent = jsObject.main.humidity, document.getElementById("wind-speed").textContent = jsObject.wind.speed;
    const t = parseFloat(document.getElementById("current-temp").textContent),
        s = parseFloat(document.getElementById("wind-speed").textContent),
        output = "Not Applicable";
    let w = 35.74 + .6215 * t - 35.75 * Math.pow(s, .16) + .4275 * t * Math.pow(s, .16);
    w = Math.round(w), document.getElementById("wind").innerHTML = t <= 50 && s > 3 ? w : output
});