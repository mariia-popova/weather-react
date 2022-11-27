import React from "react";

import "./Description.css";

export default function Description(props) {
  return (
    <div className="Description">
      <p>
        Last updated: {props.day} {props.time}
      </p>
      <p>{props.weatherDescroption}</p>
      <p>Wind speed: {props.windSpeed} m/h</p>
    </div>
  );
}
