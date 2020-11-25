const requestURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=0a35ab49fbdb70d0abf8a387e577d3f4';
fetch(requestURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        document.getElementById('current-temp').textContent = jsObject.main.temp;
        const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';
        const desc = jsObject.weather[0].description;
        document.getElementById('imagesrc').textContent = imagesrc;
        document.getElementById('icon').setAttribute('src', imagesrc);
        document.getElementById('icon').setAttribute('alt', desc);
    });