import { useEffect, useState } from "react";
import "./App.css";
import Accordion from "./components/accordian";

function App() {
  <Accordion />;
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  return (
    <>
      <div>
        <h1>StopWatch</h1>
        <span>{"0" + Math.floor((time / 6000) % 60)}:</span>
        <span>{"0" + Math.floor((time / 1000) % 60)}:</span>
        <span>{"0" + ((time / 10) % 100)}:</span>
      </div>
      <div>
        <button
          onClick={() => {
            setRunning(true);
          }}
        >
          Start
        </button>
        <button
          onClick={() => {
            setRunning(false);
          }}
        >
          Stop
        </button>
        <button onClick={(setTime = 0)}>Reset</button>
      </div>
    </>
  );
}

export default App;
