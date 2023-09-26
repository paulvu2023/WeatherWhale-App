import './styles.css';
import {
  currentLocation,
  handleCurrentWeatherData,
  handleForecastWeatherData,
} from './weatherData';

const locationForm = document.querySelector('form.searchBar');
const temperatureButtons = document.querySelectorAll('.navbuttons button');

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

handleCurrentWeatherData();
handleForecastWeatherData();
