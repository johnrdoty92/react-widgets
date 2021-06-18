import React, { Component } from "react";

const CalculatorHistory = (props) => {
  if (props.history) {
    const history = props.history.map((item, index) => {
      return <button onClick={() => props.onHistoryClick(item.eq, index)} className="btn btn-secondary m-1" key={index}>{item.eq}</button>;
    });
    return (
      <div className="calculator__history">
        <button className="btn btn-success m-1" onClick={props.onClearClick}>Clear History</button>
        {history}
      </div>
    );
  }
  return <h1>HISTORY</h1>;
};

export default CalculatorHistory;
