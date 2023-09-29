import { format, parseISO } from 'date-fns';

function displayDailyForecastWeatherData(
  processedForecastData,
  isFahrenheitActive,
) {
  const day1Icon = document.querySelector('.day1 .icon-container');
  const day1Day = document.querySelector('.day1 .day');
  const day1High = document.querySelector('.day1 .dayHigh');
  const day1Low = document.querySelector('.day1 .dayLow');

  const day2Icon = document.querySelector('.day2 .icon-container');
  const day2Day = document.querySelector('.day2 .day');
  const day2High = document.querySelector('.day2 .dayHigh');
  const day2Low = document.querySelector('.day2 .dayLow');

  const day3Icon = document.querySelector('.day3 .icon-container');
  const day3Day = document.querySelector('.day3 .day');
  const day3High = document.querySelector('.day3 .dayHigh');
  const day3Low = document.querySelector('.day3 .dayLow');

  day1Icon.innerHTML = getConditionIcon(processedForecastData.dailyCondition1);
  day1Day.textContent = format(parseISO(processedForecastData.date1), 'EEEE');

  day2Icon.innerHTML = getConditionIcon(processedForecastData.dailyCondition2);
  day2Day.textContent = format(parseISO(processedForecastData.date2), 'EEEE'); // calculate weekday based on date

  day3Icon.innerHTML = getConditionIcon(processedForecastData.dailyCondition3);
  day3Day.textContent = format(parseISO(processedForecastData.date2), 'EEEE'); // calculate weekday based on date

  if (!isFahrenheitActive) {
    day1High.textContent = `${processedForecastData.dailyHighestTempC1} °C`;
    day2High.textContent = `${processedForecastData.dailyHighestTempC2} °C`;
    day3High.textContent = `${processedForecastData.dailyHighestTempC3} °C`;
    day1Low.textContent = `${processedForecastData.dailyLowestTempC1} °C`;
    day2Low.textContent = `${processedForecastData.dailyLowestTempC2} °C`;
    day3Low.textContent = `${processedForecastData.dailyLowestTempC3} °C`;
  } else {
    day1High.textContent = `${processedForecastData.dailyHighestTempF1} °F`;
    day2High.textContent = `${processedForecastData.dailyHighestTempF2} °F`;
    day3High.textContent = `${processedForecastData.dailyHighestTempF3} °F`;
    day1Low.textContent = `${processedForecastData.dailyLowestTempF1} °F`;
    day2Low.textContent = `${processedForecastData.dailyLowestTempF2} °F`;
    day3Low.textContent = `${processedForecastData.dailyLowestTempF3} °F`;
  }
}

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
  displayDailyForecastWeatherData(processedForecastData, isFahrenheitActive);
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
