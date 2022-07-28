import React from "react";
import "./Buttons.css";

export function Buttons({ start, stop, reset, timerOn }) {
  return (
    <div className="buttons">
      <button disabled={timerOn} onClick={start}>
        Start
      </button>
      <button disabled={!timerOn} onClick={stop}>
        Stop
      </button>
      <button disabled={!timerOn} onClick={start}>
        Resume
      </button>
      <button disabled={!timerOn} onClick={reset}>
        Reset
      </button>
    </div>
  );
}
