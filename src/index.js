import './styles.css';
import {
  getCurrentWeatherData,
  processCurrentWeatherData,
  getForecastWeatherData,
  processForecastWeatherData,
  currentLocation,
} from './weatherData';

const locationForm = document.querySelector('form.searchBar');
const temperatureButtons = document.querySelectorAll('.navbuttons button');

getCurrentWeatherData()
  .then((weatherData) => {
    if (weatherData instanceof Error) {
      console.log('An error occurred in getCurrentWeatherData:', weatherData);
    } else {
      processCurrentWeatherData(weatherData);
    }
  })
  .catch((error) => {
    console.log('An error occurred:', error);
  });

getForecastWeatherData()
  .then((weatherData) => {
    if (weatherData instanceof Error) {
      console.log('An error occurred in getForecastWeatherData:', weatherData);
    } else {
      processForecastWeatherData(weatherData);
    }
  })
  .catch((error) => {
    console.log('An error occurred:', error);
  });

locationForm.addEventListener('submit', (event) => {
  const searchQuery = document.getElementById('searchQueryInput');
  event.preventDefault();
  currentLocation = searchQuery.value.trim().replace(' ', '-');
  searchQuery.value = '';
});

temperatureButtons.forEach((temperatureButton) => {
  temperatureButton.addEventListener('click', () => {
    document.querySelector('.active').classList.remove('active');
    temperatureButton.classList.add('active');
  });
});
