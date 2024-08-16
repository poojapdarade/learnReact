import "./App.css";
import { Accordion } from "./components/accordion";
import { RandomColor } from "./components/Random color generator/indexRandomColor";
import { Stopwatch } from "./components/stopwatch/indexStopwatch";

function App() {
  return (
    <div className="container">
      <Accordion />
      <Stopwatch />
      <RandomColor />
    </div>
  );
}

export default App;
