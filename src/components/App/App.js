import React, { useState, useEffect } from "react";
import { Timer } from "../Timer/Timer";
import { Buttons } from "../Buttons/Buttons";
import "./App.css";

function App() {
  const [time, setTime] = useState(0);
  const [timerOn, setTimerOn] = useState(false);

  useEffect(() => {
    let interval = null;
    if (timerOn) {
      interval = setInterval(() => {
        setTime((prev) => prev + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [timerOn]);

  const timerStart = () => {
    setTimerOn(true);
  };

  const timerStop = () => {
    setTimerOn(false);
  };

  const timerReset = () => {
    setTimerOn(false);
    setTime(0);
  };

  return (
    <div className="Timers">
      <main>
        <h1>Timer</h1>
        <div className="timer-section">
          <Timer time={time} />
          <Buttons
            start={timerStart}
            stop={timerStop}
            reset={timerReset}
            timerOn={timerOn}
            time={time}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
