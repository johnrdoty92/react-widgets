import React, { Component } from "react";
import Search from "./Search.js";
import TodaysWeather from "./TodaysWeather.js";

class WeatherApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "",
      icon: [null,null],
      temp: "",
      main: "",
      humidity: "",
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
      icon: [weather[0].main, weather[0].description],
      temp: Math.round(main.temp),
      main: weather[0].main,
      desc: weather[0].description,
      humidity: main.humidity,
      high: Math.round(main.temp_max),
      low: Math.round(main.temp_min),
      feelsLike: Math.round(main.feels_like),
    });
  }

  render() {
    const { city, icon, temp, desc, high, low, feelsLike, humidity, main } = this.state;
    return (
      <div className="weather m-2">
        <Search onSubmit={this.handleSubmit} />
        <TodaysWeather
          city={city}
          icon={icon}
          temp={temp}
          humidity={humidity}
          main={main}
          desc={desc}
          high={high}
          low={low}
          feelsLike={feelsLike}
        />
      </div>
    );
  }
}

export default WeatherApp;
