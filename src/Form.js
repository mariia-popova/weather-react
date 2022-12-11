import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Form.css";

export default function Form(props) {
  const [inputValue, setInputValue] = useState("");
  const { setWeather, setForecast } = props;

  function handleChangeInput(event) {
    setInputValue(event.target.value);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    let url = `https://api.shecodes.io/weather/v1/current?query=${inputValue}&key=aed6a8e29c1edbe73t3fba79abf409do&units=metric`;
    const weatherResponse = await axios.get(url);
    setWeather(weatherResponse.data);

    let apiForecastUrl = `https://api.shecodes.io/weather/v1/forecast?query=${inputValue}&key=aed6a8e29c1edbe73t3fba79abf409do&units=metric`;
    const forecastResponse = await axios.get(apiForecastUrl);
    const formatedArray = forecastResponse.data.daily.slice(1, 6);
    setForecast(formatedArray);
  };

  function getCurrentWeather(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(fetchCurrentWeather);
  }

  const fetchCurrentWeather = async (position) => {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    const responseCurrentWeather = await axios.get(
      `https://api.shecodes.io/weather/v1/current?lon=${lon}&lat=${lat}&key=aed6a8e29c1edbe73t3fba79abf409do`
    );
    setWeather(responseCurrentWeather.data);

    const responseForecast = await axios.get(
      `https://api.shecodes.io/weather/v1/forecast?lon=${lon}&lat=${lat}&key=aed6a8e29c1edbe73t3fba79abf409do`
    );
    const formatedArray = responseForecast.data.daily.slice(1, 6);
    setForecast(formatedArray);
  };

  useEffect(() => {
    const fetchInitialData = async () => {
      let url = `https://api.shecodes.io/weather/v1/current?query=Kyiv&key=aed6a8e29c1edbe73t3fba79abf409do&units=metric`;
      const weatherResponse = await axios.get(url);
      setWeather(weatherResponse.data);

      let apiForecastUrl = `https://api.shecodes.io/weather/v1/forecast?query=Kyiv&key=aed6a8e29c1edbe73t3fba79abf409do&units=metric`;
      const forecastResponse = await axios.get(apiForecastUrl);
      const formatedArray = forecastResponse.data.daily.slice(1, 6);
      setForecast(formatedArray);
    };
    fetchInitialData();
  }, [setWeather, setForecast]);

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
