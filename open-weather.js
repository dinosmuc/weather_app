class OpenWeather{
  constructor(){
    this.apiKey = '66ed6c1752c11c23c338d6e5a9222b31';
  }

  async getWeatherData(city,country){
    
    const dataResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${this.apiKey}`);
    const data = await dataResponse.json();

    return{
      data
    }
  }
}

