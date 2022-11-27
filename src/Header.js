import React from "react";
import "./Header.css";

export default function Header(props) {
  return (
    <div className="Header">
      <div>
        <h1>{props.city}</h1>
        <h2>{props.temp} ºC</h2>
      </div>
      <img class="icon" src={`icons/${props.icon}.png`} alt="weather icon" />
    </div>
  );
}
