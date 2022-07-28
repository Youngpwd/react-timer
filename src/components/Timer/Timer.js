import React from "react";

export function Timer({ time }) {
  return (
    <div className="display">
      <h2>
        <span>{("0" + Math.floor(time / 3600000)).slice(-2)} : </span>
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)} : </span>
        <span className="seconds">
          {("0" + Math.floor((time / 1000) % 60)).slice(-2)}
        </span>
        <span className="ms">.{("0" + ((time / 10) % 100)).slice(-2)}</span>
      </h2>
    </div>
  );
}
