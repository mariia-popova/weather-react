import React from "react";
import { format } from "date-fns";

import "./Description.css";

export default function Description(props) {
  const formatedDate = props.date ? format(props.date, "E dd.MM") : "";
  const formatedTime = props.date ? format(props.date, "HH:mm") : "";
  return (
    <div className="Description">
      <p>Last updated: {formatedDate}</p>
      <p>Time: {formatedTime}</p>
      <p>{props.weatherDescription}</p>
      <p>Wind speed: {props.windSpeed} m/h</p>
    </div>
  );
}
