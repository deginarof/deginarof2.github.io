const requestURL = "api.openweathermap.org/data/2.5/weather?id=5604473&appid=0a35ab49fbdb70d0abf8a387e577d3f4";
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
    });