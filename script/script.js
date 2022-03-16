function searchCity(city) {
  let apiKey = "af800718d3a8f4106f6f5a11754d006c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;
  axios.get(apiUrl).then(displayWeatherCondition);
}

function displayWeatherCondition(response) {
  document.querySelector("#current-location").innerHTML = response.data.name;
  document.querySelector("#current-temperature").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#main-des").innerHTML = response.data.weather[0].main;
  //humidity +wind
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#search-bar").value;
  searchCity(city);
}
let searchForm = document.querySelector("#form");
searchForm.addEventListener("submit", handleSubmit);

searchCity("Boston");

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}

function searchLocation(position) {
  let apiKey = "af800718d3a8f4106f6f5a11754d006c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=imperial&appid=${apiKey}`;
  axios.get(apiUrl).then(displayWeatherCondition);
}

let currentLocationButton = document.querySelector("#current-location-button");
currentLocationButton.addEventListener("click", getCurrentLocation);

function cToF(event) {
  event.preventDefault();
  nowTemp.innerHTML = "-2°C";
}

function fToC(event) {
  event.preventDefault();
  nowTemp.innerHTML = "28°";
}

let now = new Date();

let nowDate = document.querySelector("#current-date");
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let nowDay = days[now.getDay()];
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "Spetember",
  "October",
  "November",
  "December",
];
let nowMonth = months[now.getMonth()];
let date = now.getDate();

nowDate.innerHTML = `${nowDay}, ${nowMonth} ${date}`;

let fConversionButton = document.querySelector("#f-button");
let cConversionButton = document.querySelector("#c-button");
let nowTemp = document.querySelector("#current-temperature");

cConversionButton.addEventListener("click", cToF);
fConversionButton.addEventListener("click", fToC);
