import React, { Component } from "react";

class Keypad extends Component {
  render() {
    const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "."];
    const ops = ["-", "+", "/", "*", "="];

    const numButtons = nums.map((i) => {
      return (
        <NumButton onClick={() => this.props.onNumClick(i)} key={i} value={i} />
      );
    });
    const opButtons = ops.map((i) => {
      return (
        <OpButton onClick={() => this.props.onOpClick(i)} key={i} value={i} />
      );
    });

    return (
      <div className="container">
        <div className="row">
          <NumButton onClick={() => this.props.onNumClick(7)} value={"7"} />
          <NumButton onClick={() => this.props.onNumClick(8)} value={"8"} />
          <NumButton onClick={() => this.props.onNumClick(9)} value={"9"} />
          <OpButton onClick={() => this.props.onOpClick("/")} value={"/"} />
        </div>
        <div className="row">
          <NumButton onClick={() => this.props.onNumClick(4)} value={"4"} />
          <NumButton onClick={() => this.props.onNumClick(5)} value={"5"} />
          <NumButton onClick={() => this.props.onNumClick(6)} value={"6"} />
          <OpButton onClick={() => this.props.onOpClick("*")} value={"*"} />
        </div>
        <div className="row">
          <NumButton onClick={() => this.props.onNumClick(1)} value={"1"} />
          <NumButton onClick={() => this.props.onNumClick(2)} value={"2"} />
          <NumButton onClick={() => this.props.onNumClick(3)} value={"3"} />
          <OpButton onClick={() => this.props.onOpClick("-")} value={"-"} />
        </div>
        <div className="row">
          <NumButton onClick={() => this.props.onNumClick(".")} value={"."} />
          <NumButton onClick={() => this.props.onNumClick(2)} value={"0"} />
          <ClearButton onClick={() => this.props.onClearClick()} />
          <OpButton onClick={() => this.props.onOpClick("+")} value={"+"} />
        </div>
        <div className="row">
          <OpButton onClick={() => this.props.onOpClick("=")} value={"="} />
        </div>
      </div>
    );
  }
}

function NumButton(props) {
  let classes = "m-1 col btn btn-";
  classes += props.value === "." ? "secondary" : "primary";
  return (
    <button onClick={props.onClick} className={classes}>
      {props.value}
    </button>
  );
}

function OpButton(props) {
  let classes = "m-1 col btn btn-";
  classes += props.value === "=" ? "danger" : "warning";
  return (
    <button onClick={props.onClick} className={classes}>
      {props.value}
    </button>
  );
}

function ClearButton(props) {
  return (
    <button onClick={props.onClick} className="m-1 col btn btn-success">
      C
    </button>
  );
}

export default Keypad;
