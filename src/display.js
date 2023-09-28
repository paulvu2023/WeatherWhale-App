// function displayDailyForecastWeatherData(
//   processForecastWeatherData,
//   isFahrenheitActive,
// ) {}

function displayForecastWeatherData(processedForecastData, isFahrenheitActive) {
  const uv = document.querySelector('.uv span');
  const dailyChanceOfRain = document.querySelector('.dailyChanceOfRain span');
  const dailyHigh = document.querySelector('.dailyHigh span');
  const dailyLow = document.querySelector('.dailyLow span');

  uv.textContent = `${processedForecastData.uv1}`;
  dailyChanceOfRain.textContent = `${processedForecastData.dailyChanceOfRain1} %`;

  if (!isFahrenheitActive) {
    dailyHigh.textContent = `${processedForecastData.dailyHighestTempC1} °C`;
    dailyLow.textContent = `${processedForecastData.dailyLowestTempC1} °C`;
  } else {
    dailyHigh.textContent = `${processedForecastData.dailyHighestTempF1} °F`;
    dailyLow.textContent = `${processedForecastData.dailyLowestTempF1} °F`;
  }
}

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
    temperature.textContent = `${processedCurrentData.tempF} °F`;
    wind.textContent = `${processedCurrentData.windMPH} mph`;
  } else {
    temperature.textContent = `${processedCurrentData.tempC} °C`;
    wind.textContent = `${processedCurrentData.windKPH} kph`;
  }

  if (!getConditionIcon(processedCurrentData.condition)) {
    conditionIcon.innerHTML = `<img class='condition-icon' src='${processedCurrentData.conditionIcon}'>`;
  } else {
    conditionIcon.innerHTML = getConditionIcon(processedCurrentData.condition);
  }
}

//Returns condition icon if found, otherwise returns false
function getConditionIcon(condition) {
  condition = condition.toLowerCase();

  if (condition === 'sunny') {
    return '<i class="fa-regular fa-sun condition-icon"></i></i>';
  } else if (condition === 'clear') {
    return '<i class="fa-solid fa-moon condition-icon"></i>';
  } else if (
    condition.includes('cloud') ||
    condition === 'mist' ||
    condition === 'overcast'
  ) {
    return '<i class="fa-solid fa-cloud condition-icon"></i>';
  } else if (condition.includes('rain') || condition.includes('drizzle')) {
    return '<i class="fa-solid fa-cloud-rain condition-icon"></i>';
  } else if (condition.includes('snow')) {
    return '<i class="fa-solid fa-snowflake condition-icon"></i>';
  } else if (condition.includes('sleet')) {
    return '<i class="fa-solid fa-icicles condition-icon"></i>';
  } else if (condition.includes('thunder')) {
    return '<i class="fa-solid fa-cloud-bolt condition-icon"></i>';
  } else if (condition.includes('blowing snow') || condition === 'blizzard') {
    return '<i class="fa-solid fa-cloud-showers-heavy condition-icon"></i>';
  } else if (condition.includes('ice pellets')) {
    return '<i class="fa-solid fa-icicles condition-icon"></i>';
  } else {
    return false;
  }
}

export { displayCurrentWeatherData, displayForecastWeatherData };
