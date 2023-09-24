import "./styles.css";

const url = 'https://api.weatherapi.com/v1/current.json?key=f565f05ebecc44d0b0d25131232309&q=garden-grove'

async function getWeatherData() {
  const weatherData = await fetch(url, {mode: 'cors'});
  weatherData.json().then(function(response) {
    console.log(response);
  });
}

getWeatherData();