import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Calculator from "./components/calculator/Calculator";
import WeatherApp from "./components/weatherApp/WeatherApp.js";
import TicTacToe from "./components/TicTacToe.js";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import LocalStorageApp from "./components/LocalStorageApp";

//================================ WIDGETS ================================
class Widgets extends React.Component {
  render() {
    return (
      <div id="home" className="container">
        <h1 className="text-center m-2">Weather Forecast</h1>
        <WeatherApp />
        <h1 className="text-center m-2">Using Local Storage</h1>
        <LocalStorageApp />
        <h1 className="text-center m-2">Calculator</h1>
        <Calculator />
        <h1 className="text-center m-2">Tic Tac Toe</h1>
        <TicTacToe />
      </div>
    );
  }
}

// ========================================

ReactDOM.render(<Widgets />, document.getElementById("root"));
