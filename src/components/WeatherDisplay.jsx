import React from "react";

const WeatherDisplay = ({ weatherData }) => {
  if (!weatherData) {
    return <div className="weather-display">Search city</div>;
  }

  const weatherCondition = weatherData.weather[0].main.toLowerCase();

  let weatherClass = "";
  switch (weatherCondition) {
    case "clear":
      weatherClass = "sunny";
      break;
    case "rain":
    case "drizzle":
    case "thunderstorm":
      weatherClass = "rainy";
      break;
    case "clouds":
      weatherClass = "cloudy";
      break;
    case "wind":
      weatherClass = "windy";
      break;
    default:
      weatherClass = "default-weather";
      break;
  }

  return (
    <div className={`weather-display ${weatherClass}`}>
      <h2>{weatherData.name}</h2>
      <p>{weatherData.weather[0].description}</p>
      <p>Temperature: {Math.round(weatherData.main.temp - 273.15)}°C</p>
      <p>Humidity: {weatherData.main.humidity}%</p>
      <p>Wind Speed: {weatherData.wind.speed} m/s</p>
    </div>
  );
};

export default WeatherDisplay;
