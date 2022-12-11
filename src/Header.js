import React from "react";
import "./Header.css";

export default function Header(props) {
  return (
    <div className="Header">
      <div>
        <h1>{props.city}</h1>
        <h2>{Math.round(props.temp)} ºC</h2>
      </div>
      <img className="icon" src={props.icon} alt="weather icon" />
    </div>
  );
}
