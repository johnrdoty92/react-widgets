import React, { Component } from "react";
import Search from "./Search.js";
import TodaysWeather from "./TodaysWeather.js";

class WeatherApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "",
      icon: "",
      temp: "",
      desc: "",
      high: "",
      low: "",
      feelsLike: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fetchData = this.fetchData.bind(this);
  }
  async handleSubmit(e) {
    e.preventDefault();
    await this.setState({
      city: e.target[0].value,
    });
    this.fetchData(this.state.city);
  }

  async fetchData(city) {
    const currentURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=424de56009858404726bd5953c8f94a4&units=imperial`;

    const currentWeather = await fetch(currentURL)
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        console.log(err);
      });
    const { weather, main } = currentWeather;
    this.setState({
      icon: chooseIcon(weather[0].main, weather[0].description),
      temp: Math.round(main.temp),
      desc: weather[0].description,
      high: Math.round(main.temp_max),
      low: Math.round(main.temp_min),
      feelsLike: Math.round(main.feels_like),
    });
    console.log(this.state);
  }

  render() {
    const { city, icon, temp, desc, high, low, feelsLike } = this.state;
    return (
      <div>
        <Search onSubmit={this.handleSubmit} />
        <TodaysWeather
          city={city}
          icon={icon}
          temp={temp}
          desc={desc}
          high={high}
          low={low}
          feelsLike={feelsLike}
        />
      </div>
    );
  }
}

let chooseIcon = (inputText, description) => {
  switch (inputText) {
    case "Clear":
      return "/weather_icons/sunny.svg";
    case "Clouds":
      //add time check to choose sun or moon
      if (description == "few clouds") {
        return "/weather_icons/sunny-cloudy.svg";
      }
      return "/weather_icons/cloudy.svg";
    case "Drizzle":
    case "Rain":
      return "/weather_icons/rain.svg";
    case "Thunderstorm":
      return "/weather_icons/thunder.svg";
    case "Snow":
      return "/weather_icons/snow.svg";
    case "Mist":
    case "Smoke":
    case "Haze":
    case "Dust":
    case "Fog":
    case "Sand":
    case "Ash":
    case "Squall":
    case "Tornado":
      return "/weather_icons/mist.svg";
    default:
      return "/weather_icons/sunny.svg";
  }
};

export default WeatherApp;
