const apiKey = 'YOUR_API_KEY';
const weatherInfo = document.getElementById('weather-info');
const searchButton = document.getElementById('search-button');
const cityInput = document.getElementById('city-input');

searchButton.addEventListener('click', () => {
    const city = cityInput.value;
    if (city) {
        getWeather(city);
    }
});

async function getWeather(city) {
  try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
      const data = await response.json();
      console.log(data);

      weatherInfo.innerHTML = `
          <h2>${data.name}</h2>
          <p>Temperature: ${data.main.temp} °C</p>
          <p>Weather: ${data.weather[0].description}</p>
      `;
  } catch (error) {
      console.error('Error fetching weather data:', error);
      weatherInfo.innerHTML = '<p>Error fetching weather data.</p>';
  }
}

getWeather('London');

async function getWeather(city) {
  try {
      const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
      const weatherData = await weatherResponse.json();
      console.log(weatherData);

      const forecastResponse = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`);
      const forecastData = await forecastResponse.json();
      console.log(forecastData);

      displayWeather(weatherData, forecastData);
  } catch (error) {
      console.error('Error fetching weather data:', error);
      weatherInfo.innerHTML = '<p>Error fetching weather data.</p>';
  }
}

function displayWeather(weatherData, forecastData) {
  const weatherIcon = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
  weatherInfo.innerHTML = `
      <h2>${weatherData.name}</h2>
      <img src="${weatherIcon}" alt="${weatherData.weather[0].description}">
      <p>Temperature: ${weatherData.main.temp} °C</p>
      <p>Weather: ${weatherData.weather[0].description}</p>
      <h3>5-Day Forecast</h3>
      <div id="forecast">
          ${forecastData.list.slice(0, 5).map(day => `
              <div class="forecast-day">
                  <p>${new Date(day.dt * 1000).toDateString()}</p>
                  <p>Temp: ${day.main.temp} °C</p>
                  <p>${day.weather[0].description}</p>
                  <img src="http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png" alt="${day.weather[0].description}">
              </div>
          `).join('')}
      </div>
  `;

  weatherInfo.classList.add('active');
}
