class UI {
    constructor() {
      this.div = document.querySelector(".push-html");
    }
  
    showWeather(
      city,
      country,
      humidity,
      temperature,
      relativeHumidity,
      dewPoint,
      feelsLike,
      windDirection,
      windSpeed
    ) {
      this.div.innerHTML = `
          <div class="card main" style="width: 30rem; height: 40rem;">
              <div class="card-body">
                  <h2 class="card-title">${city},${country} ZG</h2>
                  <h3 class="weather-description">${humidity}</h3>
                  <h3 class = "temperature">${temperature} C</h3>
              <div class="weatheremo"></div>
              <div class="card sub" style="width: 25rem;">
                  <ul class="list-group list-group-flush">
                      <li class="list-group-item humidity">Relative Humidity : ${relativeHumidity} %</li>
                      <li class="list-group-item dewpoint">Dewpoint: ${dewPoint} C</li>
                      <li class="list-group-item feels-like">Feels Like: ${feelsLike} C</li>
                      <li class="list-group-item wind">Wind: From the ${windDirection} at ${windSpeed} MPH</li>
                  </ul>
              </div>
            <button type="button" class="btn btn-outline-primary">Change Location</button>
          </div>
          `;
    }
  
    showAlert() {
      this.div.innerHTML = `
        <div class="card form-card" style="width: 30rem; height: 25rem;">
            <form class="alert-form">
                <div class="mb-3">
                    <label for="city" class="form-label">City</label>
                    <input type="text" class="form-control" id="city">
                </div>
                <div class="mb-3">
                    <label for="country" class="form-label">Country</label>
                    <input type="text" class="form-control" id="country">
                </div>
                <button type="submit" class="btn btn-primary">Show Weather</button>
            </form>
        </div>
        `;
    }
  }