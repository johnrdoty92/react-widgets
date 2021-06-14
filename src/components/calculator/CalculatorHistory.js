import React, { Component } from "react";

const CalculatorHistory = (props) => {
  if (props.history) {
    const history = props.history.map((item, index) => {
      return <div key={index}>{item.eq}</div>;
    });
    return (
      <div>
        <h1>History</h1>
        {history}
      </div>
    );
  }
  return <h1>HISTORY</h1>;
};

export default CalculatorHistory;
