import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherSearch from "./components/WeatherSearch";
import "./App.css";
// import "./index.css";

const App = () => {
  const [location, setLocation] = useState({ city: "", country: "" });
  const [weatherData, setWeatherData] = useState(null);
  const [dateTime, setDateTime] = useState("");
  const [weatherCondition, setWeatherCondition] = useState("");

  useEffect(() => {
    const fetchWeather = async () => {
      const { city, country } = location;
      if (!city) return;

      try {
        const apiKey = "15c4a9b72b85e85af021a48488a8ed1d";
        const query = country ? `${city},${country}` : city;
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${apiKey}`
        );

        const now = new Date();
        const formattedDateTime = now.toLocaleString();
        setDateTime(formattedDateTime);

        setWeatherData(response.data);
        setWeatherCondition(response.data.weather[0].main.toLowerCase()); // Get the main weather condition
        console.log({
          weatherData: response.data,
          dateTime: formattedDateTime,
        });
      } catch (error) {
        console.error("Error fetching the weather data", error);
      }
    };

    fetchWeather();
  }, [location]);

  const handleSearch = (city, country) => {
    setLocation({ city, country });
  };

  return (
    <div className={`app ${weatherCondition}`}>
      <h1>Weather App</h1>
      <WeatherSearch onSearch={handleSearch} />
      {weatherData && (
        <div className="weather-details">
          <p>{`Date & Time: ${dateTime}`}</p>
          <p>{`Location: ${weatherData.name}, ${weatherData.sys.country}`}</p>
          <p>{`Temperature: ${Math.round(
            weatherData.main.temp - 273.15
          )}°C`}</p>
          <p>{`Condition: ${weatherData.weather[0].description}`}</p>
          <p>{`Humidity: ${weatherData.main.humidity}%`}</p>
          <p>{`Wind Speed: ${weatherData.wind.speed} m/s`}</p>
        </div>
      )}
    </div>
  );
};

export default App;
