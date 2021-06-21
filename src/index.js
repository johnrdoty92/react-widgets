import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Calculator from "./components/calculator/Calculator";
import WeatherApp from "./components/weatherApp/WeatherApp.js";
import TicTacToe from "./components/TicTacToe.js";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

//================================ WIDGETS ================================
class Widgets extends React.Component {
  render() {
    return (
      <div id="home" className="container">
        <TicTacToe />
        <Calculator />
        <WeatherApp />
      </div>
    );
  }
}

// ========================================

ReactDOM.render(<Widgets />, document.getElementById("root"));
