import React, { useState } from 'react';
import './App.css';
import Forecast from './components/Forecast';
import CurrentWeather from './components/CurrentWeather';
import Search from './components/Search';


function App() {
  const [city, setCity] = useState('');

  return (
    <div className="App">
      <Search setCity={setCity} />
      <CurrentWeather city={city} />
      <Forecast city={city} />
    </div>
  );
}

export default App;
