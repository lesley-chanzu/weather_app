/*document.getElementById('searchButton').addEventListener('click', function(){

const city = document.getElementById('locationInput').ariaValueMax;*/

  /* check above code if there is an error later*/
const apiKey = '5c7e8a2e7ebfe2bdac595c49591ef941';
const apiUrl = 'https://api,openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=meric';

const locationInput = document.getElementById('locationInput');
const searchButton = document.getElementById('searchButton');
const locationElement = document.getElementById('location');
const temperatureElement = document.getElementById('temperature');
const descriptionElement = document.getElementById('description');

searchButton.addEventListener('click', () => {
  const location = locationInput.value;
  if (location) {
    fetchWeather(location);
  }
});

function fetchWeather(location) {
  const url = '${apiUrl}?q=${location}&appid=${apikey}&units=metric';

  fetch(url)
      .then(response => response.json())
      .then(data => {
        locationElement.textContent = data.name;
        temperatureElement.textContent = '${Math.round(data.main.temp)}°C';
        descriptionElement.textContent = data.weather[0].description;
      })
      
      .catch(error => {
        console.error('Error fetching weather data.Please try again later:', error);
      });
}
