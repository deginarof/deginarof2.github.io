const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {
        const towns = jsonObject['towns'];
        for (let i = 1; i <= towns.length; i++) {
            if (towns[i].name === "Fish Haven") {
                let infofh = document.createElement('div');
                let mainsection = document.createElement('section');
                let h2 = document.createElement('h2');
                let h3 = document.createElement('h3');
                let yearFounded = document.createElement('p');
                let currentPopulation = document.createElement('p');
                let averageRainfall = document.createElement('p');
                let picture = document.createElement('img');

                mainsection.className = "contentReverse";
                h2.textContent = towns[i].name;
                h3.textContent = towns[i].motto;
                yearFounded.textContent = "Found Year:" + " " + towns[i].yearFounded;
                currentPopulation.textContent = "Current Population:" + " " + towns[i].currentPopulation;
                averageRainfall.textContent = "Current Rainfall:" + " " + towns[i].averageRainfall;
                picture.setAttribute('src', 'images/' + towns[i].photo);
                picture.setAttribute('alt', towns[i].name);

                infofh.appendChild(h2);
                infofh.appendChild(h3);
                infofh.appendChild(yearFounded);
                infofh.appendChild(currentPopulation);
                infofh.appendChild(averageRainfall);
                mainsection.appendChild(picture);
                mainsection.appendChild(infofh);

                document.querySelector('div.towns').appendChild(mainsection);
            }
            if (towns[i].name === "Preston") {
                let infop = document.createElement('div');
                let mainsection = document.createElement('section');
                let h2 = document.createElement('h2');
                let h3 = document.createElement('h3');
                let yearFounded = document.createElement('p');
                let currentPopulation = document.createElement('p');
                let averageRainfall = document.createElement('p');
                let picture = document.createElement('img');

                h2.textContent = towns[i].name;
                h3.textContent = towns[i].motto;
                yearFounded.textContent = "Found Year:" + " " + towns[i].yearFounded;
                currentPopulation.textContent = "Current Population:" + " " + towns[i].currentPopulation;
                averageRainfall.textContent = "Current Rainfall:" + " " + towns[i].averageRainfall;
                picture.setAttribute('src', 'images/' + towns[i].photo);
                picture.setAttribute('alt', towns[i].name);

                infop.appendChild(h2);
                infop.appendChild(h3);
                infop.appendChild(yearFounded);
                infop.appendChild(currentPopulation);
                infop.appendChild(averageRainfall);
                mainsection.appendChild(picture);
                mainsection.appendChild(infop);

                document.querySelector('div.towns').appendChild(mainsection);
            }
            if (towns[i].name === "Soda Springs") {
                let infoss = document.createElement('div');
                let mainsection = document.createElement('section');
                let h2 = document.createElement('h2');
                let h3 = document.createElement('h3');
                let yearFounded = document.createElement('p');
                let currentPopulation = document.createElement('p');
                let averageRainfall = document.createElement('p');
                let picture = document.createElement('img');

                mainsection.className = "contentReverse";
                h2.textContent = towns[i].name;
                h3.textContent = towns[i].motto;
                yearFounded.textContent = "Found Year:" + " " + towns[i].yearFounded;
                currentPopulation.textContent = "Current Population:" + " " + towns[i].currentPopulation;
                averageRainfall.textContent = "Current Rainfall:" + " " + towns[i].averageRainfall;
                picture.setAttribute('src', 'images/' + towns[i].photo);
                picture.setAttribute('alt', towns[i].name);

                infoss.appendChild(h2);
                infoss.appendChild(h3);
                infoss.appendChild(yearFounded);
                infoss.appendChild(currentPopulation);
                infoss.appendChild(averageRainfall);
                mainsection.appendChild(picture);
                mainsection.appendChild(infoss);

                document.querySelector('div.towns').appendChild(mainsection);
            }
        }
    });