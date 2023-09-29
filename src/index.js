import './styles.css';
import {
  handleCurrentWeatherData,
  handleForecastWeatherData,
  changeLocation,
} from './weatherData';

const locationForm = document.querySelector('form.searchBar');
const temperatureButtons = document.querySelectorAll('.navbuttons button');
const navButtons = document.querySelector('.navbuttons');
const buttonContainer = document.querySelector('.button-container');
const dailyAndHourlyButtons = document.querySelectorAll(
  '.button-container button',
);

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
    navButtons.querySelector('.active').classList.remove('active');
    temperatureButton.classList.add('active');
    handleCurrentWeatherData();
    handleForecastWeatherData();
  });
});

dailyAndHourlyButtons.forEach((button) => {
  button.addEventListener('click', () => {
    buttonContainer.querySelector('.active').classList.remove('active');
    button.classList.add('active');
    if (button.classList.contains('dailyButton')) {
      document.querySelector('.dailyforecast').classList.remove('hidden');
      document.querySelector('.hourlyForecast').classList.add('hidden');
    } else {
      document.querySelector('.hourlyForecast').classList.remove('hidden');
      document.querySelector('.dailyforecast').classList.add('hidden');
    }
  });
});

handleCurrentWeatherData();
handleForecastWeatherData();

setInterval(function () {
  handleCurrentWeatherData();
  handleForecastWeatherData();
}, 5000);
