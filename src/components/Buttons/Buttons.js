import React from "react";
import "./Buttons.css";

export function Buttons({ start, stop, reset, timerOn, time }) {
  return (
    <div className="buttons">
      {!timerOn && time === 0 && <button onClick={start}>Start</button>}
      {timerOn && <button onClick={stop}>Stop</button>}
      {!timerOn && time > 0 && <button onClick={start}>Resume</button>}
      {!timerOn && time > 0 && <button onClick={reset}>Reset</button>}
    </div>
  );
}
