import "./styles.css";

let url = 'https://api.weatherapi.com/v1/current.json?key=f565f05ebecc44d0b0d25131232309&q=garden-grove'

async function getWeatherData() {
  const weatherDataResponse = await fetch(url, {mode: 'cors'});
  const weatherData = await weatherDataResponse.json();
  return weatherData;
}

function processWeatherData(weatherData) {
  console.log(weatherData);

  let processedWeatherData = {
    city: weatherData.location.name,
    country: weatherData.location.country,
    localTime: weatherData.location.localtime,
    condition: weatherData.current.condition.text,
    humidity: weatherData.current.humidity,
    windMPH: weatherData.current.gust_mph,
    windKPH: weatherData.current.gust_kph,
    chanceOfRain: weatherData.current.precip_in
  }
  console.log(processedWeatherData)
}

getWeatherData()
  .then(weatherData => {
    processWeatherData(weatherData);
  })
  .catch(error => {
    console.log(error);
  })