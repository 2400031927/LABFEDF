// Replace this with your own OpenWeatherMap API key
const API_KEY = "REPLACE_WITH_YOUR_API_KEY"; 
// Example endpoint:
// https://api.openweathermap.org/data/2.5/weather?q={CITY}&appid={API_KEY}&units=metric

// DOM refs
const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");
const statusEl = document.getElementById("status");
const resultEl = document.getElementById("result");
const cityNameEl = document.getElementById("cityName");
const tempValueEl = document.getElementById("tempValue");
const descEl = document.getElementById("desc");
const feelsEl = document.getElementById("feels");
const humidityEl = document.getElementById("humidity");
const windEl = document.getElementById("wind");

const STORAGE_KEY = "weather-last-city";

// Small helper: set status text
function setStatus(msg, isError = false) {
  statusEl.textContent = msg;
  statusEl.style.color = isError ? "crimson" : "#666";
}

// Build fetch URL
function buildUrl(city) {
  const base = "https://api.openweathermap.org/data/2.5/weather";
  const q = encodeURIComponent(city.trim());
  return `${base}?q=${q}&appid=${API_KEY}&units=metric`;
}

// Fetch weather using async/await with error handling
async function fetchWeatherFor(city) {
  if (!city || !city.trim()) {
    setStatus("Please enter a city name.", true);
    return;
  }

  setStatus("Loading weather...");
  resultEl.classList.add("hidden");

  try {
    const res = await fetch(buildUrl(city));
    if (!res.ok) {
      // handle 404 / 401 etc
      if (res.status === 404) throw new Error("City not found. Try a different name.");
      if (res.status === 401) throw new Error("Invalid API key. Replace API_KEY with your key.");
      throw new Error(`API error (${res.status})`);
    }

    const data = await res.json();
    displayWeather(data);
    // Save last searched city
    localStorage.setItem(STORAGE_KEY, city.trim());
    setStatus("Weather updated ✅");
  } catch (err) {
    setStatus(err.message, true);
  }
}

// Update DOM with weather data
function displayWeather(data) {
  const { name } = data;
  const { temp, feels_like, humidity } = data.main;
  const { description } = data.weather[0];
  const windSpeed = data.wind?.speed ?? "--";

  cityNameEl.textContent = name;
  tempValueEl.textContent = Math.round(temp);
  descEl.textContent = description;
  feelsEl.textContent = Math.round(feels_like);
  humidityEl.textContent = humidity;
  windEl.textContent = windSpeed;

  resultEl.classList.remove("hidden");
}

// Load last city from localStorage on page load
function loadLastCity() {
  const last = localStorage.getItem(STORAGE_KEY);
  if (last) {
    cityInput.value = last;
    // Automatically fetch for last stored city
    fetchWeatherFor(last);
  }
}

// Event listeners
searchBtn.addEventListener("click", () => {
  fetchWeatherFor(cityInput.value);
});
cityInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    fetchWeatherFor(cityInput.value);
  }
});

// initial
setStatus("Ready. Type a city and press 'Get Weather'");
loadLastCity();
