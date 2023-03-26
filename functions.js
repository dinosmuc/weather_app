function getWindDirection(degrees) {
    const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
    const index = Math.round(degrees / 45) % 8;
    return directions[index];
  }

function getHumidityDescription(humidity) {
    let humidityDescription;
  
    switch (true) {
      case (humidity >= 90):
        humidityDescription = 'Very humid, almost oppressive';
        break;
      case (humidity >= 80):
        humidityDescription = 'Extremely muggy and uncomfortable';
        break;
      case (humidity >= 70):
        humidityDescription = 'Very humid and quite uncomfortable';
        break;
      case (humidity >= 60):
        humidityDescription = 'Quite humid and a bit uncomfortable';
        break;
      case (humidity >= 50):
        humidityDescription = 'Somewhat humid with some discomfort';
        break;
      case (humidity >= 40):
        humidityDescription = 'Comfortable and not too humid';
        break;
      default:
        humidityDescription = 'Dry and comfortable';
    }
  
    return humidityDescription;
  }

// Define input validation function
function isValidInput(city, country) {
  return city.trim() !== "" && country.trim() !== "";
}

// Define error handling function
function handleError(error) {
  console.error(error);
  ui.showAlert("An error occurred. Please try again later.");
}