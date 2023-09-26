import './styles.css';
import {
  getCurrentWeatherData,
  processCurrentWeatherData,
  getForecastWeatherData,
  processForecastWeatherData,
} from './weatherData';

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
