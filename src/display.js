function displayCurrentWeatherData(processedCurrentData, isFahrenheitActive) {
  const city = document.querySelector('.city');
  const country = document.querySelector('.country');
  const localTime = document.querySelector('.localTime');
  const humidity = document.querySelector('.humidity span');
  const wind = document.querySelector('.wind span');
  const condition = document.querySelector('.condition');
  const conditionIcon = document.querySelector('.condition-icon-div');
  const temperature = document.querySelector('.temperature');

  city.textContent = `${processedCurrentData.city},`;
  country.textContent = processedCurrentData.country;
  localTime.textContent = processedCurrentData.localTime;
  condition.textContent = processedCurrentData.condition;
  humidity.textContent = `${processedCurrentData.humidity} %`;

  if (isFahrenheitActive) {
    temperature.textContent = processedCurrentData.tempF;
    wind.textContent = `${processedCurrentData.windMPH} mph`;
  } else {
    temperature.textContent = processedCurrentData.tempC;
    wind.textContent = processedCurrentData.windKPH;
  }

  if (!getConditionIcon()) {
    conditionIcon.innerHTML = `<img class='condition-icon conditionIconColor' src='${processedCurrentData.conditionIcon}'>`;
  } else {
    conditionIcon.innerHTML = getConditionIcon();
  }
}

export { displayCurrentWeatherData };
