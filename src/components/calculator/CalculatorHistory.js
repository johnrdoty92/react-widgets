import React from "react";

const CalculatorHistory = (props) => {
  if (props.history) {
    const history = props.history.map((item, index) => {
      return (
        <button
          onClick={() => props.onHistoryClick(item.eq, index)}
          className="btn btn-secondary m-1"
          key={index}
        >
          {item.eq}
        </button>
      );
    });
    return (
      <div className="col-sm-6 col calculator__history d-flex flex-column overflow-auto">
        <button className="btn btn-success m-1" onClick={props.onClearClick}>
          Clear History
        </button>
        {history}
      </div>
    );
  }
  return <h1>HISTORY</h1>;
};

export default CalculatorHistory;
