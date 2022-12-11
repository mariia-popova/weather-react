import React from "react";
import { format } from "date-fns";
import "./Forecast.css";

export default function Forecast(props) {
  if (props.forecast === null) {
    return null;
  }
  return (
    <div className="Forecast">
      {props.forecast.map(function (day) {
        const formatedDay = format(day.time * 1000, "E");
        return (
          <div className="ForecastInfo" key={day.time}>
            <p>{formatedDay}</p>
            <img src={day.condition.icon_url} alt="icon" />
            <p>
              {Math.round(day.temperature.minimum)} º/{" "}
              {Math.round(day.temperature.maximum)}º
            </p>
          </div>
        );
      })}
    </div>
  );
}
