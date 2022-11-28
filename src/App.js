import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import Description from "./Description";
import Form from "./Form";
import Forecast from "./Forecast";
import { useState } from "react";

function App() {
  const [weather, setWeather] = useState();
  console.log(weather);

  return (
    <div>
      <div className="App">
        <Header
          temp={weather ? weather.main.temp : 2}
          city={"Kyiv"}
          icon={"03d"}
        />
        <Description
          day={"Saturday"}
          time={"12:45"}
          weatherDescroption={"Cloud"}
          windSpeed={4.5}
        />
        <Form setWeather={setWeather} />
        <div className="ForecastTable">
          <Forecast day={"Mon"} icon={"03d"} maxTemp={8} minTemp={5} />
          <Forecast day={"Tue"} icon={"01d"} maxTemp={9} minTemp={6} />
          <Forecast day={"Wed"} icon={"03d"} maxTemp={10} minTemp={5} />
          <Forecast day={"Thu"} icon={"09d"} maxTemp={7} minTemp={4} />
          <Forecast day={"Sat"} icon={"03d"} maxTemp={9} minTemp={4} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
