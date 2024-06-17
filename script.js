// Get the API key from https://openweathermap.org/
const API_KEY = "5c7e8a2e7ebfe2bdac595c49591ef941";

// Get the user's location
navigator.geolocation.getCurrentPosition(position => {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;

  // API endpoint URL
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  // Fetch the weather data
  fetch(url)
   .then(response => response.json())
   .then(data => {
      // Extract the weather data
      const weather = data.weather[0];
      const temp = data.main.temp;
      const humidity = data.main.humidity;
      const windSpeed = data.wind.speed;
      const city = data.name;

      // Display the weather data on the page
      document.getElementById("city").innerText = city;
      document.getElementById("temperature").innerText = `${temp}°C`;
      document.getElementById("humidity").innerText = `Humidity: ${humidity}%`;
      document.getElementById("wind-speed").innerText = `Wind Speed: ${windSpeed} m/s`;
      document.getElementById("weather-condition").innerText = `Weather: ${weather.main}`;
    })
   .catch(error => console.error("Error:", error));
});

