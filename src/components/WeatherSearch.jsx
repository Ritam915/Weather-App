import React, { useState } from "react";

const WeatherSearch = ({ onSearch }) => {
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(city, country);
  };

  return (
    <form onSubmit={handleSubmit} className="weather-search">
      <input
        type="text"
        className="search-input"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        required
      />
      <input
        type="text"
        className="search-input"
        placeholder="Enter country (optional)"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
      />
      <button type="submit" className="search-button">
        Search
      </button>
    </form>
  );
};

export default WeatherSearch;
