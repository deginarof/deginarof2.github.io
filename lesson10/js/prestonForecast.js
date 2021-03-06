const apiURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=efef4e51c7aa99beb077464dad90cb14';
fetch(apiURL)
    .then(response => response.json())
    .then(jsObject => {
        console.log(jsObject);
        document.getElementById('1temp').textContent = jsObject.list[7].main.temp.toPrecision(2);
        document.getElementById('2temp').textContent = jsObject.list[15].main.temp.toPrecision(2);
        document.getElementById('3temp').textContent = jsObject.list[23].main.temp.toPrecision(2);
        document.getElementById('4temp').textContent = jsObject.list[31].main.temp.toPrecision(2);
        document.getElementById('5temp').textContent = jsObject.list[39].main.temp.toPrecision(2);

        const imagesrc1 = 'https://openweathermap.org/img/w/' + jsObject.list[7].weather[0].icon + '.png';
        const desc1 = jsObject.list[0].weather[0].description;
        document.getElementById('icon1').setAttribute('src', imagesrc1);
        document.getElementById('icon1').setAttribute('alt', desc1);

        const imagesrc2 = 'https://openweathermap.org/img/w/' + jsObject.list[15].weather[0].icon + '.png';
        const desc2 = jsObject.list[0].weather[0].description;
        document.getElementById('icon2').setAttribute('src', imagesrc2);
        document.getElementById('icon2').setAttribute('alt', desc2);

        const imagesrc3 = 'https://openweathermap.org/img/w/' + jsObject.list[23].weather[0].icon + '.png';
        const desc3 = jsObject.list[0].weather[0].description;
        document.getElementById('icon3').setAttribute('src', imagesrc3);
        document.getElementById('icon3').setAttribute('alt', desc3);

        const imagesrc4 = 'https://openweathermap.org/img/w/' + jsObject.list[31].weather[0].icon + '.png';
        const desc4 = jsObject.list[0].weather[0].description;
        document.getElementById('icon4').setAttribute('src', imagesrc4);
        document.getElementById('icon4').setAttribute('alt', desc4);

        const imagesrc5 = 'https://openweathermap.org/img/w/' + jsObject.list[39].weather[0].icon + '.png';
        const desc5 = jsObject.list[0].weather[0].description;
        document.getElementById('icon5').setAttribute('src', imagesrc5);
        document.getElementById('icon5').setAttribute('alt', desc5);
    });