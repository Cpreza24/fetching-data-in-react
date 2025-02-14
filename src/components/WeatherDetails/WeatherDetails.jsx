const WeatherDetails = ({ weather }) => {
  console.log('WeatherDetails props:', weather);
  return (
    <section>
      <h2>Weather Details</h2>
      <p>Location: {weather.location}</p>
      <p>Temperature: {weather.temperature}</p>
      <p>Condition: {weather.condition}</p>
    </section>
  );
};

export default WeatherDetails;
