import {
  displayCurrentWeatherData,
  displayForecastWeatherData,
} from './display';

let currentLocation = 'Huntington-Beach';
let currentURL = `https://api.weatherapi.com/v1/current.json?key=f565f05ebecc44d0b0d25131232309&q=${currentLocation}`;
let forecastURL = `http://api.weatherapi.com/v1/forecast.json?key=f565f05ebecc44d0b0d25131232309&q=${currentLocation}&days=3`;

function changeLocation(newLocation) {
  currentLocation = newLocation;
  currentURL = `https://api.weatherapi.com/v1/current.json?key=f565f05ebecc44d0b0d25131232309&q=${newLocation}`;
  forecastURL = `http://api.weatherapi.com/v1/forecast.json?key=f565f05ebecc44d0b0d25131232309&q=${newLocation}`;
}

function isFahrenheitActive() {
  const fahrenheitButton = document.querySelector('.fahrenheitButton');
  return fahrenheitButton.classList.contains('active');
}

async function handleCurrentWeatherData() {
  try {
    document.querySelector('.error').textContent = '';
    const weatherData = await getCurrentWeatherData();
    if (weatherData instanceof Error) {
      console.log('An error occurred in getCurrentWeatherData:', weatherData);
    } else {
      const currentWeatherData = processCurrentWeatherData(weatherData);
      displayCurrentWeatherData(currentWeatherData, isFahrenheitActive());
    }
  } catch (error) {
    console.log('An error occurred:', error);
    document.querySelector('.error').textContent = 'Location not found.';
  }
}

async function handleForecastWeatherData() {
  try {
    document.querySelector('.error').textContent = '';
    const weatherData = await getForecastWeatherData();
    if (weatherData instanceof Error) {
      console.log('An error occurred in getForecastWeatherData:', weatherData);
    } else {
      const currentWeatherData = processForecastWeatherData(weatherData);
      displayForecastWeatherData(currentWeatherData, isFahrenheitActive());
    }
  } catch (error) {
    console.log('An error occurred:', error);
    document.querySelector('.error').textContent = 'Location not found.';
  }
}

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
  return processedCurrentData;
}

async function getForecastWeatherData() {
  try {
    const weatherDataResponse = await fetch(forecastURL, { mode: 'cors' });
    if (!weatherDataResponse.ok) {
      throw new Error(`${weatherDataResponse.status}`);
    }
    const weatherData = await weatherDataResponse.json();
    console.log(weatherData);
    return weatherData;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

function processForecastWeatherData(weatherData) {
  let processedForecastData = {
    dailyChanceOfRain:
      weatherData.forecast.forecastday[0].day.daily_chance_of_rain,
    dailyHighestTempC: weatherData.forecast.forecastday[0].day.maxtemp_c,
    dailyHighestTempF: weatherData.forecast.forecastday[0].day.maxtemp_f,
    dailyLowestTempC: weatherData.forecast.forecastday[0].day.mintemp_c,
    dailyLowestTempF: weatherData.forecast.forecastday[0].day.mintemp_f,
    uv: weatherData.forecast.forecastday[0].day.uv,
  };
  console.log(processedForecastData);
  return processedForecastData;
}

export {
  currentLocation,
  getCurrentWeatherData,
  processCurrentWeatherData,
  getForecastWeatherData,
  processForecastWeatherData,
  isFahrenheitActive,
  handleCurrentWeatherData,
  handleForecastWeatherData,
  changeLocation,
};
