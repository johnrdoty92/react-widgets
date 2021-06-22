import React, { Component } from "react";
import { ReactComponent as Sunny } from "./weather_icons/sunny.svg";
import { ReactComponent as Cloudy } from "./weather_icons/cloudy.svg";
import { ReactComponent as Misty } from "./weather_icons/misty.svg";
import { ReactComponent as NightCloudy } from "./weather_icons/night-cloudy.svg";
import { ReactComponent as Night } from "./weather_icons/night.svg";
import { ReactComponent as Rain } from "./weather_icons/rain.svg";
import { ReactComponent as Snow } from "./weather_icons/snow.svg";
import { ReactComponent as SunnyCloudy } from "./weather_icons/sunny-cloudy.svg";
import { ReactComponent as Thunder } from "./weather_icons/thunder.svg";

function Icon(props) {
  const now = new Date();
  const time = now.getHours();

  switch (props.input) {
    case "Clear":
      if (time < 18 && time > 6) {
        return <Sunny className="weather__icon col" />;
      } else {
        return <Night className="weather__icon col" />;
      }
    case "Clouds":
      //add time check to choose sun or moon
      if (props.description == "few clouds") {
        if (time < 18 && time > 6) {
          return <SunnyCloudy className="weather__icon col" />;
        } else {
          return <NightCloudy className="weather__icon col" />;
        }
      }
      return <Cloudy className="weather__icon col" />;
    case "Drizzle":
    case "Rain":
      return <Rain className="weather__icon col" />;
    case "Thunderstorm":
      return <Thunder className="weather__icon col" />;
    case "Snow":
      return <Snow className="weather__icon col" />;
    case "Mist":
    case "Smoke":
    case "Haze":
    case "Dust":
    case "Fog":
    case "Sand":
    case "Ash":
    case "Squall":
    case "Tornado":
      return <Misty className="weather__icon col" />;
    default:
      return <Sunny className="weather__icon col" />;
  }
}

class TodaysWeather extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.city) {
      return (
        <div>
          <div className="text-muted text-center">
            Weather API provided by OpenWeatherMap
          </div>
        </div>
      );
    }
    return (
      <div className="weather__result container">
        <div className="row">
          <h2 className="weather__city text-center col">{this.props.city}</h2>
        </div>
        <div className="row">
          <h1 className="weather__temp text-center align-self-center col">
            {this.props.temp}&#176;
          </h1>
          <Icon input={this.props.icon[0]} description={this.props.icon[1]} />
        </div>
        <div className="row">
          <div className="weather__high-low text-center col">
            {this.props.high}&#176; / {this.props.low}&#176;
          </div>
          <div className="weather__description text-center col">
            {this.props.desc}
          </div>
        </div>
        <div className="row">
          <div className="weather__feels-like text-center col">
            Feels like: {this.props.feelsLike}&#176;
          </div>
          <div className="weather__humidity text-center col">
            Humidity: {this.props.humidity}%
          </div>
        </div>
        <div className="text-muted text-center m-2">
          Weather API provided by OpenWeatherMap
        </div>
      </div>
    );
  }
}

export default TodaysWeather;
