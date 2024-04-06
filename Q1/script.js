document.getElementById('weatherForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const city = document.getElementById('cityInput').value;
    if (city) {
        getWeather(city);
    }
});

async function getWeather(city) {
    const apiKey = '24265994491d4d3bb8931157240604';
    const apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=5`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        displayWeather(data);
    } catch (error) {
        console.log('Failed to fetch weather data:', error);
    }
}

function displayWeather(data) {
    const forecast = data.forecast.forecastday;

    const weatherInfo = `
        <h2>Current Weather in ${data.location.name}, ${data.location.country}</h2>
        <p>Time: ${data.current.last_updated}</p>
        <p>Temperature: ${data.current.temp_c}°C</p>
        <p>Condition: ${data.current.condition.text}</p>
        <p>Humidity: ${data.current.humidity}%</p>
        <img src="${data.current.condition.icon}" alt="${data.current.condition.text}">
        <h2>5-Day Forecast</h2>
        <div id="forecast">
            ${forecast.map(day => `
                <div>
                    <p>Date: ${day.date}</p>
                    <p>Max Temp: ${day.day.maxtemp_c}°C</p>
                    <p>Min Temp: ${day.day.mintemp_c}°C</p>
                    <img src="${day.day.condition.icon}" alt="${day.day.condition.text}">
                </div>
            `).join('')}
        </div>
    `;

    document.getElementById('weatherInfo').innerHTML = weatherInfo;
}