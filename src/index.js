import "./styles.css";

let url = 'https://api.weatherapi.com/v1/current.json?key=f565f05ebecc44d0b0d25131232309&q=garden-grove'

async function getWeatherData() {
  const weatherDataResponse = await fetch(url, {mode: 'cors'});
  const weatherData = await weatherDataResponse.json();
  return weatherData;
}

getWeatherData()
  .then(weatherData => {
    console.log(weatherData);
  })
  .catch(error => {
    console.log(error);
  })