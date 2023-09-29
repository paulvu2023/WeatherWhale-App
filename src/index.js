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
      handleForecastWeatherData();
    }
  });
});

handleCurrentWeatherData();
handleForecastWeatherData();

setInterval(function () {
  handleCurrentWeatherData();
  handleForecastWeatherData();
}, 5000);

//Navigation for 24 hour forecast
let slideIndex = 1;
showSlides(slideIndex);

document.querySelectorAll('.dot').forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentSlide(index + 1);
  });
});

document.querySelector('.prev').addEventListener('click', () => {
  plusSlides(-1);
});

document.querySelector('.next').addEventListener('click', () => {
  plusSlides(1);
});

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName('mySlides');
  let dots = document.getElementsByClassName('dot');
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
  slides[slideIndex - 1].style.display = 'flex';
  dots[slideIndex - 1].className += ' active';
}
