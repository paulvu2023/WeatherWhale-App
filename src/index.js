import "./styles.css";

let currentLocation = 'tampa';
let currentURL = `https://api.weatherapi.com/v1/current.json?key=f565f05ebecc44d0b0d25131232309&q=${currentLocation}`;

async function getCurrentWeatherData() {
  try {
    const weatherDataResponse = await fetch(currentURL, { mode: 'cors' });
    if (!weatherDataResponse.ok) {
      throw new Error(`${weatherDataResponse.status}`);
    }
    const weatherData = await weatherDataResponse.json();
    return weatherData;
  } catch (err) {
    console.error(err);
    throw err; // Rethrow the error to indicate that something went wrong
  }
}

function processCurrentWeatherData(weatherData) {
  console.log(weatherData);

  let processedWeatherData = {
    city: weatherData.location.name,
    country: weatherData.location.country,
    localTime: weatherData.location.localtime,
    tempC: weatherData.current.temp_c,
    tempF: weatherData.current.temp_f,
    condition: weatherData.current.condition.text,
    humidity: weatherData.current.humidity,
    windMPH: weatherData.current.gust_mph,
    windKPH: weatherData.current.gust_kph,
    chanceOfRain: weatherData.current.precip_in
  }
  console.log(processedWeatherData)
}

getCurrentWeatherData()
  .then(weatherData => {
    // Check if there was an error in getWeatherData
    if (weatherData instanceof Error) {
      console.log("An error occurred in getWeatherData:", weatherData);
    } else {
      processCurrentWeatherData(weatherData);
    }
  })
  .catch(error => {
    console.log("An error occurred:", error);
  });
