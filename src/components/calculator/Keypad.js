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
        {numButtons}
        {opButtons}
        <ClearButton onClick={() => this.props.onClearClick()} />
      </div>
    );
  }
}

function NumButton(props) {
  let classes = "btn btn-";
  classes += props.value === "." ? "secondary" : "primary";
  return (
    <button onClick={props.onClick} className={classes}>
      {props.value}
    </button>
  );
}

function OpButton(props) {
  let classes = "btn btn-";
  classes += props.value === "=" ? "danger" : "warning";
  return (
    <button onClick={props.onClick} className={classes}>
      {props.value}
    </button>
  );
}

function ClearButton(props) {
  return (
    <button onClick={props.onClick} className="btn btn-success">
      C
    </button>
  );
}

export default Keypad;
