import { useState } from 'react';
import WeatherSearch from './components/WeatherSearch/WeatherSearch';
import WeatherDetails from './components/WeatherDetails/WeatherDetails';
import * as weatherService from './services/weatherService';
import './App.css';

const App = () => {
  const [weather, setWeather] = useState({});

  const fetchData = async (city) => {
    const data = await weatherService.show(city);
    const newWeatherState = {
      location: data.location.name,
      temperature: data.current.temp_f,
      condition: data.current.condition.text,
    };
    setWeather(newWeatherState);
  };
  console.log('State:', weather);

  return (
    <main>
      <h1>Weather API</h1>
      <WeatherSearch fetchData={fetchData} />
      <WeatherDetails weather={weather} />
    </main>
  );
};

export default App;
