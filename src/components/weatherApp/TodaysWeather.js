import React, {Component} from "react";
import {ReactComponent as Sunny} from "./weather_icons/sunny.svg";
import {ReactComponent as Cloudy} from "./weather_icons/cloudy.svg";
import {ReactComponent as Misty} from "./weather_icons/misty.svg";
import {ReactComponent as NightCloudy} from "./weather_icons/night-cloudy.svg";
import {ReactComponent as Night} from "./weather_icons/night.svg";
import {ReactComponent as Rain} from "./weather_icons/rain.svg";
import {ReactComponent as Snow} from "./weather_icons/snow.svg";
import {ReactComponent as SunnyCloudy} from "./weather_icons/sunny-cloudy.svg";
import {ReactComponent as Thunder} from "./weather_icons/thunder.svg";

function Icon(props) {
  const now = new Date();
  const time = now.getHours();

  switch (props.input) {
    case "Clear":
      if(time < 18 && time > 6) {
      return <Sunny />;
    } else {
      return <Night />;
    }
    case "Clouds":
      //add time check to choose sun or moon
      if (props.description == "few clouds") {
        if(time < 18 && time > 6) {
          return <SunnyCloudy className="weather__icon"/>;
        } else {
          return <NightCloudy className="weather__icon" />
        }
      }
      return <Cloudy className="weather__icon"/>;
    case "Drizzle":
    case "Rain":
      return <Rain className="weather__icon"/>;
    case "Thunderstorm":
      return <Thunder className="weather__icon"/>;
    case "Snow":
      return <Snow className="weather__icon"/>;
    case "Mist":
    case "Smoke":
    case "Haze":
    case "Dust":
    case "Fog":
    case "Sand":
    case "Ash":
    case "Squall":
    case "Tornado":
      return <Misty className="weather__icon"/>;
    default:
      return <Sunny className="weather__icon"/>;
  }
};

class TodaysWeather extends Component {
  constructor(props) {
    super(props)
  }

  render () {return (
    <div className="weather_">
      <h2 className="weather__city">{this.props.city}</h2>
      <Icon input={this.props.icon[0]} description={this.props.icon[1]} />
      <div className="weather__temp">{this.props.temp}&#176;</div>
      <div className="weather__humidity">Humidity: {this.props.humidity}%</div>
      <div className="weather__description">{this.props.desc}</div>
      <div className="weather__high-low">
        {this.props.high}&#176; / {this.props.low}&#176;
      </div>
      <div className="feels-like">Feels like: {this.props.feelsLike}&#176;</div>
    </div>
  );
};
}

export default TodaysWeather;
