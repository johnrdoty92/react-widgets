import React, { Component } from "react";
import Display from "./Display";
import Keypad from "./Keypad";

class Calculator extends Component {
  state = {
    equation: "",
    history: [{}],
  };

  handleNumClick = (i) => {
    const equation = this.state.equation.slice();
    let nextInput = i;

    if (i === "." && equation.indexOf(".") !== -1) {
      if (!equation.match(/[-+/*]/) || equation.match(/[-+/*]\d*[.]/)) {
        nextInput = "";
      }
    }
    this.setState({
      equation: equation.concat(nextInput),
    });
  };

  handleOpClick = (i) => {
    const equation = this.state.equation.toString().slice();
    const history = this.state.history.slice();

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
    if (equation.match(/[-*+/]/) === null) {
      this.setState({
        equation: equation.concat(i),
      });
      return;
    }
    if (equation.match(/\d*[.]?\d+$/)) {
      console.log("This equation is ready to evaluate");
      //EVALUATE THE EQUATION
      const evaluated = eval(equation);
      this.setState({
        equation: evaluated + i,
        history: history.concat([{ eq: equation }]),
      });
      console.log(this.state);
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
      <div className="calculator container">
        <Display equation={this.state.equation} />
        <Keypad
          onNumClick={this.handleNumClick}
          onOpClick={this.handleOpClick}
          onClearClick={this.handleClearClick}
        />
      </div>
    );
  }
}

export default Calculator;
