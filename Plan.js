import React from "react";
import "./App.css";

function Plan(props) {
  const arr = props.p;
  return arr.map((value, i) => {
    return (
      <>
        <li className="shadow p-2 my-2 col-sm-9"> {value}</li>
        <button
          className="btn btn danger my-2 col-sm-2 offset-1"
          onClick={() => {
            props.sendData(i);
          }}
        >
          X
        </button>
      </>
    );
  });
}

export default Plan;
