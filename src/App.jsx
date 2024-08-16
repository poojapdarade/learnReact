import "./App.css";
import { Accordion } from "./components/accordion";
import { RandomColor } from "./components/Random-color-generator/indexRandomColor";
import { Stopwatch } from "./components/stopwatch/indexStopwatch";
import { StarRating } from "./components/Star-Rating/starRating";

function App() {
  return (
    <div className="container">
      <Accordion />
      <Stopwatch />
      <RandomColor />
      <StarRating />
    </div>
  );
}

export default App;
