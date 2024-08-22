# React + Vite

# https://dayforecast.netlify.app/

# u can check it by clicking on this link

import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherSearch from "./components/WeatherSearch";
import WeatherDisplay from "./components/WeatherDisplay";
import "./App.css";

const App = () => {
const [weatherData, setWeatherData] = useState(null);

const fetchWeather = async (city) => {
try {
const apiKey = "15c4a9b72b85e85af021a48488a8ed1d";
const response = await axios.get(
`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
);
setWeatherData(response.data);
console.log(response.data);
} catch (error) {
console.error("Error fetching the weather data", error);
}
};

return (
<div className="app">
<h1>Weather App</h1>
<WeatherSearch onSearch={fetchWeather} />
<WeatherDisplay weatherData={weatherData} />
</div>
);
};

export default App;
