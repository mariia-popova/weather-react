import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Form.css";

export default function Form(props) {
  const [inputValue, setInputValue] = useState("");

  function handleChangeInput(event) {
    setInputValue(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.shecodes.io/weather/v1/current?query=${inputValue}&key=aed6a8e29c1edbe73t3fba79abf409do&units=metric`;
    axios.get(url).then(saveWeatherResault);

    let apiForecastUrl = `https://api.shecodes.io/weather/v1/forecast?query=${inputValue}&key=aed6a8e29c1edbe73t3fba79abf409do&units=metric`;
    axios.get(apiForecastUrl).then(saveForecastResault);
  }

  function saveWeatherResault(response) {
    props.setWeather(response.data);
  }

  function saveForecastResault(response) {
    const formatedArray = response.data.daily.slice(1, 6);
    props.setForecast(formatedArray);
  }

  function getCurrentWeather(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(fetchCurrentWeather);
  }

  function fetchCurrentWeather(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    axios
      .get(
        `https://api.shecodes.io/weather/v1/current?lon=${lon}&lat=${lat}&key=aed6a8e29c1edbe73t3fba79abf409do`
      )
      .then(saveWeatherResault);

    axios
      .get(
        `https://api.shecodes.io/weather/v1/forecast?lon=${lon}&lat=${lat}&key=aed6a8e29c1edbe73t3fba79abf409do`
      )
      .then(saveForecastResault);
  }

  useEffect(() => {
    let url = `https://api.shecodes.io/weather/v1/current?query=Kyiv&key=aed6a8e29c1edbe73t3fba79abf409do&units=metric`;
    axios.get(url).then(saveWeatherResault);

    let apiForecastUrl = `https://api.shecodes.io/weather/v1/forecast?query=Kyiv&key=aed6a8e29c1edbe73t3fba79abf409do&units=metric`;
    axios.get(apiForecastUrl).then(saveForecastResault);
  }, [saveWeatherResault, saveForecastResault]);

  return (
    <form className="Form" onSubmit={handleSubmit}>
      <input
        className="enter-city"
        id="cityEnter"
        type="text"
        placeholder="Enter the city"
        onChange={handleChangeInput}
        value={inputValue}
      />
      <button className="button-search" id="search-button" type="Submit">
        Search
      </button>

      <button id="current-button" onClick={getCurrentWeather}>
        Current
      </button>
    </form>
  );
}
