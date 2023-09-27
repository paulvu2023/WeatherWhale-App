import './styles.css';
import {
  handleCurrentWeatherData,
  handleForecastWeatherData,
  changeLocation,
} from './weatherData';

const locationForm = document.querySelector('form.searchBar');
const temperatureButtons = document.querySelectorAll('.navbuttons button');

locationForm.addEventListener('submit', (event) => {
  const searchQuery = document.getElementById('searchQueryInput');
  event.preventDefault();
  const newLocation = searchQuery.value.trim().replace(' ', '-');
  changeLocation(newLocation);
  handleCurrentWeatherData();
  handleForecastWeatherData();
  searchQuery.value = '';
});

temperatureButtons.forEach((temperatureButton) => {
  temperatureButton.addEventListener('click', () => {
    document.querySelector('.active').classList.remove('active');
    temperatureButton.classList.add('active');
    handleCurrentWeatherData();
    handleForecastWeatherData();
  });
});

handleCurrentWeatherData();
handleForecastWeatherData();

setInterval(function () {
  handleCurrentWeatherData();
  handleForecastWeatherData();
}, 5000);
