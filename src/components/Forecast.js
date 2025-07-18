import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Forecast.css';
const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

const Forecast = ({ city }) => {
  const [forecast, setForecast] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    if (city) {
      fetchForecast(city);
    }
  }, [city]);

  const fetchForecast = async (city) => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`);

      setForecast(response.data.list);
      setError('');
    } catch (error) {
      console.error('Error fetching weather forecast:', error.message);
      setError('Could not fetch weather forecast. Please try again.');
    }
  };

  return (
    <div className="forecast-container">
      {error && <p className="error">{error}</p>}
      {forecast.length > 0 && (
        <div>
          <h2>7-day Forecast for {city}</h2>
          <div className="forecast-grid">
           {forecast.filter((_, i) => i % 8 === 0).map((day, index) => (
  <div key={index} className="forecast-day">
    <p>Day {index + 1}</p>
    <p>Temperature: {day.main.temp}°C</p>
    <p>Humidity: {day.main.humidity}%</p>
    <p>Wind Speed: {day.wind.speed} m/s</p>
    <p>Weather: {day.weather[0].description}</p>
  </div>
))}

  
          </div>
        </div>
      )}
    </div>
  );
};

export default Forecast;
