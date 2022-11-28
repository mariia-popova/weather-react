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
  }

  function saveResault(response) {
    props.setWeather(response.data);
  }

  return (
    <form className="Form" onSubmit={handleSubmit}>
      <input
        class="enter-city"
        id="cityEnter"
        type="text"
        placeholder="Enter the city"
        onChange={handleChangeInput}
      />
      <input
        class="button-search"
        id="search-button"
        type="Submit"
        value="Search"
      />
      <button id="current-button">Current</button>
    </form>
  );
}
