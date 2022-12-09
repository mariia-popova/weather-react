import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import Description from "./Description";
import Form from "./Form";
import Forecast from "./Forecast";
import { useState } from "react";

function App() {
  const [weather, setWeather] = useState();
  const [forecast, setForecast] = useState(null);
  return (
    <div>
      <div className="App">
        <Header
          temp={weather ? weather.main.temp : 2}
          city={weather ? weather.name : "Kyiv"}
          icon={weather ? weather.weather[0].icon : "03d"}
        />
        <Description
          date={weather ? new Date(weather.dt * 1000) : null}
          weatherDescription={weather ? weather.weather[0].main : "Cloud"}
          windSpeed={weather ? weather.wind.speed : 8}
        />
        <Form setWeather={setWeather} setForecast={setForecast} />
        <Forecast forecast={forecast} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
