import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const fetchWeather = async () => {
    try {
      const response = await axios.get(`/api/weather/current/${city}`);
      setWeather(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchForecast = async () => {
    try {
      const response = await axios.get(`/api/weather/forecast/${city}`);
      setForecast(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="App">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city"
      />
      <button onClick={fetchWeather}>Get Current Weather</button>
      <button onClick={fetchForecast}>Get 7-day Forecast</button>

      {weather && (
        <div>
          <h2>Current Weather in {weather.name}</h2>
          <p>Temperature: {weather.main.temp}K</p>
          <p>Humidity: {weather.main.humidity}%</p>
          <p>Wind Speed: {weather.wind.speed}m/s</p>
        </div>
      )}

      {forecast && (
        <div>
          <h2>7-day Forecast for {forecast.city.name}</h2>
          {forecast.list.map((day, index) => (
            <div key={index}>
              <p>Day {index + 1}: {day.temp.day}K</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
