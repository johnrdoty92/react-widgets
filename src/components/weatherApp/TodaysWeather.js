import React from "react";

const TodaysWeather = (props) => {
  return (
    <div className="weather__current">
      <h2>{props.city}</h2>
      <img src={require(props.icon)} />
      <div>{props.temp}</div>
      <div>{props.desc}</div>
      <div>
        {props.high} / {props.low}
      </div>
      <div>{props.feelsLike}</div>
    </div>
  );
};


export default TodaysWeather;
