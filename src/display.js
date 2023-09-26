function displayCurrentWeatherData(processedCurrentData, isFahrenheitActive) {
  const city = document.querySelector('.city');
  const country = document.querySelector('.country');
  const localTime = document.querySelector('.localTime');
  const humidity = document.querySelector('.humidity');
  const wind = document.querySelector('.wind');
  const condition = document.querySelector('.condition');
  const conditionIcon = document.querySelector('.condition span');
  const temperature = document.querySelector('.temperature');
  city.textContent = `${processedCurrentData.city},`;
  country.textContent = processedCurrentData.country;
  localTime.textContent = processedCurrentData.localTime;
  condition.textContent = processedCurrentData.condition;

  if (isFahrenheitActive) {
    temperature.textContent = processedCurrentData.tempF;
    wind.textContent = processedCurrentData.windMPH;
  } else {
    temperature.textContent = processedCurrentData.tempC;
    wind.textContent = processedCurrentData.windKPH;
  }

  //add styling and spans
}

export { displayCurrentWeatherData };
