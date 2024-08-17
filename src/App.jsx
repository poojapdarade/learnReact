import "./App.css";
import { Accordion } from "./components/accordion";
import { RandomColor } from "./components/Random-color-generator/indexRandomColor";
import { Stopwatch } from "./components/stopwatch/indexStopwatch";
import { StarRating } from "./components/Star-Rating/starRating";
import { LoadMoreData } from "./components/Load-more-button-project/indexLoadmore";

function App() {
  return (
    <div className="container">
      <Accordion />
      <Stopwatch />
      <RandomColor />
      <StarRating />
      <LoadMoreData />
    </div>
  );
}

export default App;
