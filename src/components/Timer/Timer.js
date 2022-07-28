import React from "react";
import "./Timer.css";

export function Timer({ time }) {
  return (
    <div className="timer">
      <h2>{time}</h2>
    </div>
  );
}
