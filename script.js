document.getElementById('getWeather').addEventListener('click', function() {
    const city = document.getElementById('city').value;
    const apiKey = '3afcd229781ea03d7fc3749106aeb74a';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found');
            }
            return response.json();
        })
        .then(data => {
            const weatherDescription = data.weather[0].description;
            const temperature = data.main.temp;
            const humidity = data.main.humidity;

            document.getElementById('weatherResult').innerHTML = `
                <h2>${data.name}</h2>
                <p>Temperature: ${temperature}°C</p>
                <p>Humidity: ${humidity}%</p>
                <p>Condition: ${weatherDescription}</p>
            `;
        })
        .catch(error => {
            document.getElementById('weatherResult').innerHTML = `<p>${error.message}</p>`;
        });
});
