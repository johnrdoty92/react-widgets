import React from "react";

const Display = (props) => {
  return <div className="m-2" style={{height: '38px', backgroundColor: 'white'}}>{props.equation}</div>;
};

export default Display;
