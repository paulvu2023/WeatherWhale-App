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

  if (!getConditionIcon(processedCurrentData.condition)) {
    conditionIcon.innerHTML = `<img class='condition-icon conditionIconColor' src='${processedCurrentData.conditionIcon}'>`;
  } else {
    conditionIcon.innerHTML = getConditionIcon(processedCurrentData.condition);
  }
}

//Returns condition icon if found, otherwise returns false
function getConditionIcon(condition) {
  condition = condition.toLowerCase();

  if (condition === 'sunny') {
    return '<i class="fa-solid fa-sun condition-icon" style="color: yellow"></i>';
  } else if (condition === 'clear') {
    return '<i class="fa-solid fa-moon condition-icon" style="color: yellow;"></i>';
  } else if (condition.includes('cloud') || condition === 'mist') {
    return '<i class="fa-solid fa-cloud condition-icon" style="color: lightblue;"></i>';
  } else if (condition.includes('rain') || condition.includes('drizzle')) {
    return '<i class="fa-solid fa-cloud-rain condition-icon" style="color: lightblue;"></i>';
  } else if (condition.includes('snow')) {
    return '<i class="fa-solid fa-snowflake" style="color: lightblue;"></i>';
  } else if (condition.includes('sleet')) {
    return '<i class="fa-solid fa-icicles" style="color: lightblue;"></i>';
  } else if (condition.includes('thunder')) {
    return '<i class="fa-solid fa-cloud-bolt" style="color: yellow;"></i>';
  } else if (condition.includes('blowing snow') || condition === 'blizzard') {
    return '<i class="fa-solid fa-cloud-showers-heavy" style="color: lightblue;"></i>';
  } else if (condition.includes('ice pellets')) {
    return '<i class="fa-solid fa-icicles" style="color: lightblue;"></i>';
  } else {
    return false;
  }
}

export { displayCurrentWeatherData };
