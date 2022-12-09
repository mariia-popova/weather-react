import axios from "axios";
import React, { useState } from "react";
import "./Form.css";

export default function Form(props) {
  const [inputValue, setInputValue] = useState("");

  function handleChangeInput(event) {
    setInputValue(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=3a94f3778290bfeee61278505dbbe51d&units=metric`;
    axios.get(url).then(saveResault);

    let apiForecastUrl = `https://api.shecodes.io/weather/v1/forecast?query=${inputValue}&key=aed6a8e29c1edbe73t3fba79abf409do&units=metric`;
    axios.get(apiForecastUrl).then(saveForecastResault);
  }

  function saveResault(response) {
    props.setWeather(response.data);
  }

  function saveForecastResault(response) {
    const formatedArray = response.data.daily.slice(1, 6);
    props.setForecast(formatedArray);
  }

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

      <button id="current-button">Current</button>
    </form>
  );
}
