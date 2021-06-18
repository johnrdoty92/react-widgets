import React, { Component } from "react";
import Display from "./Display";
import Keypad from "./Keypad";
import CalculatorHistory from "./CalculatorHistory";

class Calculator extends Component {
  state = {
    equation: "",
    history: [],
  };

  handleNumClick = (i) => {
    const equation = this.state.equation.slice();
    let nextInput = i;
    //Handle decimals
    if (i === "." && equation.indexOf(".") !== -1) {
      if (!equation.match(/[-+/*]/) || equation.match(/[-+/*]\d*[.]/)) {
        nextInput = "";
      }
    }
    //Handle leading zeroes
    if (i === 0 && (equation.length < 1 || equation.match(/[-+/*]$/))) {
      nextInput = "";
    }
    //Add to the equation
    this.setState({
      equation: equation.concat(nextInput),
    });
  };

  handleOpClick = (i) => {
    const equation = this.state.equation.toString().slice();
    const history = this.state.history.slice();
    //Handle "="
    if (i === "=") {
      try {
        const evaluated = eval(equation);
        this.setState({
          equation: evaluated,
          history: history.concat([{ eq: equation }]),
        });
        return;
      } catch (err) {
        return;
      }
    }
    //If no operator is currently set, add it to the equation
    if (equation.match(/[-*+/]/) === null) {
      this.setState({
        equation: equation.concat(i),
      });
      return;
    }
    //If there is already an operator and a valid equation, evaluate and concatenate operator
    if (equation.match(/\d*[.]?\d+$/)) {
      const evaluated = eval(equation);
      this.setState({
        equation: evaluated + i,
        history: history.concat([{ eq: equation }]),
      });
      return;
    }
  };

  handleClearClick = () => {
    this.setState({
      equation: "",
    });
  };

  render() {
    return (
      <div className="calculator container bg-dark rounded">
        <Display equation={this.state.equation} />
        <Keypad
          onNumClick={this.handleNumClick}
          onOpClick={this.handleOpClick}
          onClearClick={this.handleClearClick}
        />
        <CalculatorHistory history={this.state.history} />
      </div>
    );
  }
}

export default Calculator;
