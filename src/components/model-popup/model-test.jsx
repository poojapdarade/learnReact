import { useState } from "react";
import { Model } from "./model";

export function ModelTest() {
  const [showModelPopup, setShowModelPopup] = useState(false);

  function handleToggleModelPopup() {
    setShowModelPopup(!showModelPopup);
  }
  return (
    <div>
      <button onClick={handleToggleModelPopup}>Open Model Popup</button>
      {showModelPopup && <Model body={<div>Customize body</div>} />}
    </div>
  );
}
