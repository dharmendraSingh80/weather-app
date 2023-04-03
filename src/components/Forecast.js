import React, { useState, useEffect } from "react";
import "../styles/forcast.css";
import axios from "axios";

const Forecast = ({ city, apiKey }) => {
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then((data) => {
      setWeatherData(data.data.list);
    });
  }, [city]);

  return (
    <div className="weather-forecast">
      <h2>5-Days Weather Forecast of {city}</h2>
      <div className="forecast-container">
        {weatherData.map((weather, index) => (
          <div className="forecast-card" key={index}>
            <h3>{new Date(weather.dt * 1000).toLocaleDateString()}</h3>
            <h4>{new Date(weather.dt * 1000).toLocaleTimeString()}</h4>
            <p>{Math.round(weather.main.temp)}°C</p>
            <p>{weather.weather[0].description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;
