const openWeather = new OpenWeather();
const ui = new UI();

ui.showAlert();

const form = document.querySelector("form");
const cityInput = document.querySelector("#city");
const countryInput = document.querySelector("#country");


form.addEventListener("submit", (event) => {
  event.preventDefault();

  const city = cityInput.value;
  const country = countryInput.value;

  
  
  openWeather.getWeatherData(city, country)
    .then((weatherData) => {
      const humidity = getHumidityDescription(weatherData.data.main.humidity);
      const temperature = (weatherData.data.main.temp - 273.15).toFixed(2);
      const relativeHumidity = weatherData.data.main.humidity.toFixed(2);
      const A = 17.27;
      const B = 237.7;
      const dewPoint = ((B * Math.log(relativeHumidity / 100)) + (A * temperature)) / (A - Math.log(relativeHumidity / 100) - B);
      const feelsLike = (weatherData.data.main.feels_like - 273.15).toFixed(2);
      const windDirection = getWindDirection(weatherData.data.wind.deg);
      const windSpeed = weatherData.data.wind.speed.toFixed(2);

      ui.showWeather(city, country, humidity, temperature, relativeHumidity, dewPoint.toFixed(2), feelsLike, windDirection, windSpeed);
    })
    .catch((error) => {
      console.log(error);
      alert("An error occurred. City or Country are inaccurate!");
    });
});

    
