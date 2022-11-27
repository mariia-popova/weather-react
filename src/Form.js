import React from "react";
import "./Form.css";

export default function Form() {
  return (
    <form className="Form">
      <input
        class="enter-city"
        id="cityEnter"
        type="text"
        placeholder="Enter the city"
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
