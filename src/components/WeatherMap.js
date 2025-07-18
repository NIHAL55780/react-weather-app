import React from 'react';

const WeatherMap = ({ lat, lon }) => {
  // Here, you can use the lat and lon props to render a map
  // and display weather information for the specified location

  return (
    <div>
      {/* Render a map with weather information */}
      <h2>Weather Map</h2>
      <p>Latitude: {lat}</p>
      <p>Longitude: {lon}</p>
    </div>
  );
};

export default WeatherMap;
