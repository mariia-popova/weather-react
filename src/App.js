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
          temp={weather ? weather.temperature.current : 0}
          city={weather ? weather.city : ""}
          icon={weather ? weather.condition.icon_url : ""}
        />
        <Description
          date={weather ? new Date(weather.time * 1000) : null}
          weatherDescription={weather ? weather.condition.description : ""}
          windSpeed={weather ? weather.wind.speed : 0}
        />
        <Form setWeather={setWeather} setForecast={setForecast} />
        <Forecast forecast={forecast} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
