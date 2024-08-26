import { useState } from "react";
import "./tabs.css";

export function Tabs({ tabsContent }) {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  function handleOnClick(getCurrentIndex) {
    setCurrentTabIndex(getCurrentIndex);
  }

  return (
    <div className="wrapper">
      <div className="heading"></div>
      <div className="tab-button-container">
        {tabsContent.map((tabItem, index) => (
          <button
            className={`tab-item${currentTabIndex === index ? " active" : ""}`}
            onClick={() => handleOnClick(index)}
            key={tabItem.label}
          >
            <span className="label">{tabItem.label}</span>
          </button>
        ))}
      </div>

      <div
        className="content"
        style={{ color: "red", width: "fit-content", margin: "0 auto" }}
      >
        {tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content}
      </div>
    </div>
  );
}
