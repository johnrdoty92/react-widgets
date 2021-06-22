import React, { Component } from "react";
import Search from "./Search.js";
import TodaysWeather from "./TodaysWeather.js";

class WeatherApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "",
      icon: [null, null],
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
    console.log(this.state.city);
    this.fetchData(this.state.city);
  }

  async fetchData(city) {
    const currentURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=424de56009858404726bd5953c8f94a4&units=imperial`;

    const currentWeather = await fetch(currentURL)
      .then((res) => {
        console.log(res.ok);
        return res.json();
      })
      .then((data) => {
        if (data.cod !== 200) {
          this.setState({
            error: "Sorry! We could not find the city you are looking for.",
          });
        } else {
          const { weather, main } = data;
          this.setState({
            icon: [weather[0].main, weather[0].description],
            temp: Math.round(main.temp),
            main: weather[0].main,
            desc: weather[0].description,
            humidity: main.humidity,
            high: Math.round(main.temp_max),
            low: Math.round(main.temp_min),
            feelsLike: Math.round(main.feels_like),
            error: "",
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const {
      city,
      icon,
      temp,
      desc,
      high,
      low,
      feelsLike,
      humidity,
      main,
      error,
    } = this.state;
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
          error={error}
        />
      </div>
    );
  }
}

export default WeatherApp;
