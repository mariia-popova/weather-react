import React from "react";
import "./Forecast.css";

export default function Forecast(props) {
  return (
    <div className="Forecast">
      <p>{props.day}</p>
      <img src={`icons/${props.icon}.png`} alt="icon" />
      <p>
        {props.maxTemp}º/{props.minTemp}º
      </p>
    </div>
  );
}
