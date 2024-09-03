import "./App.css";
import { FeatureFlags } from "./components/feature-flag";
//import { GithubProfileFinder } from "./components/github-profile-finder/githubindex";
//import { ModelTest } from "./components/model-popup/model-test";
// import { Accordion } from "./components/accordion";
// import { RandomColor } from "./components/Random-color-generator/indexRandomColor";
// import { Stopwatch } from "./components/stopwatch/indexStopwatch";
// import { StarRating } from "./components/Star-Rating/starRating";
// import { LoadMoreData } from "./components/Load-more-button-project/indexLoadmore";
// import { QRCodeGenerator } from "./components/QR-Code/indexQRCode";
// import { LightDarkMode } from "./components/light-dark mode";
// import { TreeView } from "./components/recursiveNavigationMenu";
// import { menus } from "./components/recursiveNavigationMenu/data";
// import { ScrollIndicator } from "./components/custom-scroll-indicator";
// import { Tabs } from "./components/custom-tabs/tabs";
// import { TabTest } from "./components/custom-tabs/tab-test";

function App() {
  return (
    <div className="container">
      {/* <Accordion />
      <Stopwatch />
      <RandomColor />
      <StarRating />
      <LoadMoreData />
      <QRCodeGenerator /> 
      <LightDarkMode />
      <TreeView menus={menus} />
      <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} />
      <TabTest />
      <ModelTest  />
      <GithubProfileFinder />*/}

      <FeatureFlagGlobalState>
        <FeatureFlags />
      </FeatureFlagGlobalState>
    </div>
  );
}

export default App;
