import React, { Component } from "react";

class Keypad extends Component {
  render() {
    return (
      <div className="calculator__keypad">
        <div className="row">
          <Button onClick={this.props.onNumClick} value={"7"} />
          <Button onClick={this.props.onNumClick} value={"8"} />
          <Button onClick={this.props.onNumClick} value={"9"} />
          <Button onClick={this.props.onOpClick} value={"/"} />
        </div>
        <div className="row">
          <Button onClick={this.props.onNumClick} value={"4"} />
          <Button onClick={this.props.onNumClick} value={"5"} />
          <Button onClick={this.props.onNumClick} value={"6"} />
          <Button onClick={this.props.onOpClick} value={"*"} />
        </div>
        <div className="row">
          <Button onClick={this.props.onNumClick} value={"1"} />
          <Button onClick={this.props.onNumClick} value={"2"} />
          <Button onClick={this.props.onNumClick} value={"3"} />
          <Button onClick={this.props.onOpClick} value={"+"} />
        </div>
        <div className="row">
          <Button onClick={this.props.onNumClick} value={"."} />
          <Button onClick={this.props.onNumClick} value={"0"} />
          <Button onClick={this.props.onClearClick} value={"C"} />
          <Button onClick={this.props.onOpClick} value={"-"} />
        </div>
        <div className="row">
          <Button onClick={this.props.onOpClick} value={"="} />
        </div>
      </div>
    );
  }
}

function Button(props) {
  let classes = "m-1 col btn btn-";
  switch (props.value) {
    case "0":
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
      classes += "primary";
      break;
    case "/":
    case "+":
    case "-":
    case "*":
      classes += "warning";
      break;
    case ".":
      classes += "secondary";
      break;
    case "C":
      classes += "success";
      break;
    case "=":
      classes += "danger";
      break;
    default:
      return;
  }
  return (
    <button onClick={() => props.onClick(props.value)} className={classes}>
      {props.value}
    </button>
  );
}

export default Keypad;
