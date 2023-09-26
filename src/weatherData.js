let currentLocation = 'garden-grove';
let currentURL = `https://api.weatherapi.com/v1/current.json?key=f565f05ebecc44d0b0d25131232309&q=${currentLocation}`;
let forecastURL = `http://api.weatherapi.com/v1/forecast.json?key=f565f05ebecc44d0b0d25131232309&q=${currentLocation}`;

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
    throw err;
  }
}

function processCurrentWeatherData(weatherData) {
  let processedCurrentData = {
    city: weatherData.location.name,
    country: weatherData.location.country,
    localTime: weatherData.location.localtime,
    tempC: weatherData.current.temp_c,
    tempF: weatherData.current.temp_f,
    condition: weatherData.current.condition.text,
    conditionIcon: weatherData.current.condition.icon,
    humidity: weatherData.current.humidity,
    windMPH: weatherData.current.wind_mph,
    windKPH: weatherData.current.wind_kph,
  };
  console.log(processedCurrentData);
}

async function getForecastWeatherData() {
  try {
    const weatherDataResponse = await fetch(forecastURL, { mode: 'cors' });
    if (!weatherDataResponse.ok) {
      throw new Error(`${weatherDataResponse.status}`);
    }
    const weatherData = await weatherDataResponse.json();
    return weatherData;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

function processForecastWeatherData(weatherData) {
  let processedForecastData = {
    dailyChanceOfrain:
      weatherData.forecast.forecastday[0].day.daily_chance_of_rain,
    dailyHighestTempC: weatherData.forecast.forecastday[0].day.maxtemp_c,
    dailyHighestTempF: weatherData.forecast.forecastday[0].day.maxtemp_f,
    dailyLowestTempC: weatherData.forecast.forecastday[0].day.mintemp_c,
    dailyLowestTempF: weatherData.forecast.forecastday[0].day.mintemp_f,
    uv: weatherData.forecast.forecastday[0].day.uv,
  };
  console.log(processedForecastData);
}

export {
  getCurrentWeatherData,
  processCurrentWeatherData,
  getForecastWeatherData,
  processForecastWeatherData,
};
