import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Calculator from "./components/calculator/Calculator";
import ShoppingApp from "./components/shoppingApp.js";
import Game from "./components/TicTacToe.js";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

//================================ WIDGETS ================================
class Widgets extends React.Component {
  render() {
    return (
      <div id="home" className="widgets-group">
        <div className="widget">
          <Game />
        </div>
        <div className="widget">
          <Calculator />
        </div>
        <div className="widget">
          <ShoppingApp />
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(<Widgets />, document.getElementById("root"));
